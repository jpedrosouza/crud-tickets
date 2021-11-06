const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ticketsregister',
})

app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    const name = req.body.name
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM registers WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err)
        }
        if (result.length == 0) {
            db.query("INSERT INTO registers ( name, lastName, email, password) VALUES (?,?,?,?)", [name, lastName, email, password], (err, response) => {
                if (err) {
                    res.send(err)
                    return
                }

                res.send({ msg: 'registered successfully' })
            })
        } else {
            res.send({ msg: 'already registered user' })
        }
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM registers WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.send(err)
        }

        if (result.length > 0) {
            res.send({ msg: 'successfully logged in' })
        } else {
            res.send({ msg: 'user not found' })
        }
    })
})

app.listen(3001, () => {
    console.log('running on port 3001')
})