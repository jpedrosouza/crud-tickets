const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10

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
            bcrypt.hash(password, saltRounds, (erro, hash) => {
                db.query("INSERT INTO registers ( name, lastName, email, password) VALUES (?,?,?,?)", [name, lastName, email, hash], (err, response) => {
                    if (err) {
                        res.send(err)
                        return
                    }

                    res.send({ msg: 'Registrado com sucesso' })
                })
            })
        } else {
            res.send({ msg: 'Usuário já cadastrado' })
        }
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM registers WHERE email = ? ", [email], (err, result) => {
        if (err) {
            res.send(err)
        }

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (erro, result) => {
                if (result) {
                    res.send({ msg: 'successfully logged in' })
                } else {
                    res.send({ msg: 'incorrect password' })
                }
            })
        } else {
            res.send({ msg: 'user not found' })
        }
    })
})

app.post('/ticket', (req, res) => {
    const evento = req.body.evento
    const artista = req.body.artista
    const local = req.body.local
    const descricao = req.body.descricao
    const data = req.body.data
    const preco = req.body.preco
    const url = req.body.url

    db.query("INSERT INTO tickets (evento, artista, local, descricao, data, preco, url) VALUES (?,?,?,?,?,?,?)", [evento, artista, local, descricao, data, preco, url], (err, response) => {
        if (err) {
            res.send(err)
            return
        }

        res.send({ msg: 'Evento registrado com sucesso' })
    })
})

app.listen(3001, () => {
    console.log('running on port 3001')
})