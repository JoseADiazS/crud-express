const express = require('express');
const app = express();
const PORT = 3302;

// Middleware to parse JSON bodies
app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Error handling for server startup
server.on('error', (error) => {
    console.error('Error starting server:', error);
});
