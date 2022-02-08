const express = require('express');
const cors = require('cors')
const app = express();


//middleware
app.use(cors());
app.use(express.json())

app.use("/todo", todoRouter)

// Not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
  });
  
// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });


module.exports = app;