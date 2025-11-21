const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, 'public')));

// GET API: /api/add?num1=5&num2=10
app.get('/api/add', (req, res) => {
    const n1 = parseFloat(req.query.num1);
    const n2 = parseFloat(req.query.num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({ result: n1 + n2 });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});