const databaseConfig = require("../config/database");
const bcrypt = require("bcrypt");

module.exports = class AuthController {
  constructor() {
    this.db = new databaseConfig().connectDatabase();
    this.saltRounds = 10;
  }

  // Register User in database.

  async register(req, res) {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    try {
      await bcrypt.hash(password, this.saltRounds, async (error, hash) => {
        await this.db.query(
          "INSERT INTO registers ( name, last_name, email, password) VALUES (?,?,?,?)",
          [name, lastName, email, hash],
          (err, response) => {
            if (err) {
              res.send(err);
              return;
            }

            res.send({ msg: "Registrado com sucesso" });
          }
        );
      });
    } catch (err) {
      return res.status(500).json({
        message: "Usuário já cadastrado",
      });
    }
  }

  // Auth User in backend.

  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    this.db.query(
      "SELECT * FROM registers WHERE email = ? ",
      [email],
      (err, result) => {
        if (err) {
          return res.send(err);
        }

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (erro, result) => {
            if (result) {
              res.send({ msg: "successfully logged in" });
            } else {
              res.send({ msg: "incorrect password" });
            }
          });
        } else {
          res.status(500).json({ msg: "user not found" });
        }
      }
    );
  }
};
