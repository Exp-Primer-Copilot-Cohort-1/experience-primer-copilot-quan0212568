// Create web server

// Run: node comments.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const commentRouter = require('./routes/comment.route');

// Use body-parser to parse application/json
app.use(bodyParser.json());

// Use comment router
app.use('/api', commentRouter);

// Start server
app.listen(port, () => console.log(`Server started at ${port}`));
