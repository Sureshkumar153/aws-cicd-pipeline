const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from AWS CI/CD pipeline Node.js  updated app!');
});

// Bind to 0.0.0.0 instead of default
app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://0.0.0.0:${port}`);
});


