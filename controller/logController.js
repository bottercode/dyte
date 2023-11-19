const Log = require('../models/logModel')

exports.createLog = async (req, res) => {
  try {
    const logData = req.body
    console.log('Received log data:', logData)
    const log = new Log(logData)
    await log.save()

    res.status(201).json({message: 'Log ingested successfully', log})
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Internal Server Error'})
  }
}

exports.searchLogs = async (req, res) => {
  try {
    const {level, message, resourceId, timestamp, traceId, spanId, commit, parentResourceId, startDate, endDate} = req.query
    console.log('Received request:', req.query)

    const filters = {
      level: level || {$exists: true},
      message: message || {$exists: true},
      resourceId: resourceId || {$exists: true},
      timestamp: timestamp || {$exists: true},
      traceId: traceId || {$exists: true},
      spanId: spanId || {$exists: true},
      commit: commit || {$exists: true},
      'metadata.parentResourceId': parentResourceId || {$exists: true}
    }

    const dateRangeFilter = {
      timestamp: {
        $gte: startDate ? new Date(startDate) : new Date(0),
        $lte: endDate ? new Date(new Date(endDate).setHours(23, 59, 59, 999)) : new Date()
      }
    }

    const query = {
      $and: [filters, dateRangeFilter]
    }

    if (message) {
      const regexPattern = new RegExp(message, 'i')
      query.$and.push({
        message: {$regex: regexPattern}
      })
    }

    const logs = await Log.find(query)

    res.send(logs)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}
