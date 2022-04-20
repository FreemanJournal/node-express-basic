const express = require("express");
var cors = require('cors');
const { json } = require("express/lib/response");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
// handle post request
app.use(express.json())

// using bodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quae at error aliquid ipsam veniam. Dolor itaque labore exercitationem accusamus vitae quaerat pariatur nostrum vero unde ut! Unde, impedit corrupti!')
})


const users = [
    { id: 1, email: 'Dream', password: "DJ" },
    { id: 2, email: 'Pain', password: "Artist" },
    { id: 3, email: 'Happy', password: "Drawing" },
    { id: 4, email: 'Lough', password: "Comedy" },
    { id: 5, email: 'Peace', password: "Coding" },
]

app.get('/users', (req, res) => {
   if(req.query.id){
       return res.send(users.find(item => item.id === +req.query.id))
   }
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    res.send(users.find(item => item.id === +req.params.id))
})

app.post('/user', (req, res) => {
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    // res.send(JSON.stringify(users)).status(200)
    res.send(users).status(200)
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})