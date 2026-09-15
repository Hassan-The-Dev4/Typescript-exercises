const express = require("express");
const { sayGoodbye } = require("../controllers/goodbyeController");

const router = express.Router();

router.get("/", sayGoodbye);

module.exports = router;
