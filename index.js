const express = require('express');
const mysqlx = require('@mysql/xdevapi');
const conf = require('./config');

const app = express();
app.use(express.json());
const dbDetails = conf["DB"];

const books = [
{title: 'Harry Potter', id: 1},
{title: 'Twilight', id: 2},
{title: 'Lorien Legacies', id: 3}
]

const config = {
    password: dbDetails.password,
    user: dbDetails.user,
    host: dbDetails.host,
    port: dbDetails.port,
    schema: dbDetails.schema
    
};
 
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

//{"title": "new byox"}
//http://localhost:8080/api/books
app.post('/api/books', (req, res)=> {
 
    const book = {
        id: books.length + 1,
        title: req.body.title
    };
    books.push(book);
    res.send(book);
    });

    mysqlx.getSession(config)
    .then(session => {
        // console.log(session.inspect()); // { user: 'root', host: 'localhost', port: 33060 }
        const table = session.getSchema(config.schema).getTable('tbluser');
        console.log("connected to table");
        return table.select()
            .where('usrName = "Barani1"')
            .execute();
    })
    .then((result) => {
        console.log(result.fetchAll());//To fetch all data. fetchOne() to fetch one record at a time
    });

    app.get('/api/login', (req,res)=> {
        mysqlx.getSession(config)
    .then(session => {
        // console.log(session.inspect()); // { user: 'root', host: 'localhost', port: 33060 }
        const table = session.getSchema(config.schema).getTable('tbluser');
        console.log("connected to table");
        return table.select()
            .where('usrName = "Barani1"')
            .execute();
    })
    .then((result) => {
        res.send(result.fetchAll());//To fetch all data. fetchOne() to fetch one record at a time
    });
        
        });
//{"uname": "Barani1", "pwd":"hai" }        

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 90;
app.listen(port, () => console.log(`Listening on port ${port}..`));