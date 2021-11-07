const mysql = require("mysql");

module.exports = class DatabaseConfig {
    connectDatabase() {
        const db = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "password",
            database: "tickets_register",
        });

        return db;
    }
};