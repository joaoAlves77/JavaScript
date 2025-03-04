const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({ message: 'GET request received' });
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'POST request received', data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
