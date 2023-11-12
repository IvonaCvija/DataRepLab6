const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors');

// Enable CORS(Cross-Origin Resource Sharing) middleware
app.use(cors());
// Additional headers for CORS
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// Body parsing middleware to handle JSON and URL-encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Handling a POST request to '/api/book'
app.post('/api/book', (req,res)=>{
    // Logging the received data to the console
    console.log(req.body);
    res.send("Data Received!");
    // Sending a response message
})

// Handling a GET request to the root path '/'
app.get('/', (req, res) =>{
    res.send('Hello World!')
})

// Start the Express app and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)    
})

// Handling a GET request to '/api/books'
app.get('/api/books', (req,res) =>{
    // Mock data for books
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]

        // Respond with JSON data
        res.json({
            myBooks:books,
            "Message":"Some Information",
            "Disclaimer":"Hello World"
        })
})
