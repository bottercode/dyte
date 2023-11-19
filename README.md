# Clone the repository:

https://github.com/bottercode/dyte.git

# Navigate to the project directory then,

## Install dependencies:

_npm install_

# Start the server:

_npm run start_

**Open your web browser and visit http://localhost:3000.**

# System Design

The system is designed as a web application with a Node.js backend and a simple HTML/CSS/JavaScript frontend. It uses a MongoDB database to store log data.

## Components

### Backend: Built with Node.js, using Express for handling HTTP requests. MongoDB is used as the database to store log data.

### Frontend: A simple HTML-based UI with JavaScript for user interaction. Fetch API is used to communicate with the backend.

## Features

### Ingest Log Data: Users can ingest log data by entering it into the provided textarea and clicking the "Ingest Data" button.

### Filter Logs: Users can filter logs based on various criteria such as level, timestamp, resource ID, message, trace ID, span ID, commit, and parent resource ID.

### Role-Based Access: Admins can log in by checking the "Login as admin" checkbox, granting access to additional features.

# Known Issues:

Role-Based Access: Role-based access control is a basic implementation. A more robust authentication and authorization system could be implemented in future versions.
