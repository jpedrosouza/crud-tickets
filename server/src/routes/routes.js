const express = require('express')
const router = express.Router()

// Controllers

const authController = require('../controllers/auth_controller')
const ticketsController = require('../controllers/ticket_controller')

// Auth routes.

router.post("/register", (req, res) => new authController().register(req, res));
router.post("/login", (req, res) => new authController().login(req, res));

// Ticket routes.

router.post("/ticket", (req, res) => new ticketsController().store(req, res));

module.exports = router;
