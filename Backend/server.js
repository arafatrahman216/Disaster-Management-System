const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); 

require('./db/connect')
const Book = require('./models/Book');

app.post('/auth/login' , async (req, res) => {
    try {
        const BookID = req.body.BookID;
        const book = await Book.findOne({ BookID });
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

