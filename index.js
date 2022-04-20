const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: '0147321852369' },
    { id: 2, name: "jalila", email: "jalila@gmail.com", phone: '0147456852369' },
    { id: 3, name: "malala", email: "malala@gmail.com", phone: '0147412852369' },
    { id: 4, name: "sohana", email: "sohana@gmail.com", phone: '0147789852369' },
    { id: 5, name: "sumia", email: "sumia@gmail.com", phone: '0147327532369' }
]

app.get('/', (req, res) => {
    res.send('my smarty node')
})

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const match = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(match)
    }
    else {
        res.send(users)
    }
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'lemon', 'papaya'])
})

app.listen(port, () => {
    console.log('Listening to the port', port)
})