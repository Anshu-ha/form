const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post('/submit', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (username.length < 5) {
        return res.send("Username must be at least 5 characters long.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.send("Please enter a valid email address.");
    }

    if (password !== confirmPassword) {
        return res.send("Passwords do not match.");
    }

    res.send("Form submitted successfully!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
