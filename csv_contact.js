const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();

app.get('/api/contact-info', (req, res) => {
    const results = [];
    fs.createReadStream('Assets/Contact_list.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
