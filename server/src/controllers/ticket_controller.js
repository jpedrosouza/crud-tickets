const databaseConfig = require("../config/database");

module.exports = class TicketsController {
    constructor() {
        this.db = new databaseConfig().connectDatabase();
    }

    // insert ticket in database.

    async store(req, res) {
        const evento = req.body.evento;
        const artista = req.body.artista;
        const local = req.body.local;
        const descricao = req.body.descricao;
        const data = req.body.data;
        const preco = req.body.preco;
        const url = req.body.url;

        this.db.query(
            "INSERT INTO tickets (evento, artista, local, descricao, data, preco, url) VALUES (?,?,?,?,?,?,?)", [evento, artista, local, descricao, data, preco, url],
            (err, response) => {
                if (err) {
                    return res.status(500).send(err);
                }

                return res.status(200).send({ msg: "Evento registrado com sucesso" });
            }
        );
    }
};