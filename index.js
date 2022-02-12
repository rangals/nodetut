const express = require('express');
const app = express();
app.use(express.json());

const books = [
{title: 'Harry Potter', id: 1},
{title: 'Twilight', id: 2},
{title: 'Lorien Legacies', id: 3}
]
 
//READ Request Handlers
app.get('/', (req, res) => {
res.send('Welcome to Node.js Tutorial!');
});


//http://localhost:90/api/books
app.get('/api/books', (req,res)=> {
res.send(books);
});
 
//http://localhost:90/api/books/2
app.get('/api/books/:id', (req, res) => {
const book = books.find(c => c.id === parseInt(req.params.id));
 
if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
res.send(book);
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 90;
app.listen(port, () => console.log(`Listening on port ${port}..`));