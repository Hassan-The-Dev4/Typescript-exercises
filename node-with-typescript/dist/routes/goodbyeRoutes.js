"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { sayGoodbye } = require("../controllers/goodbyeController");
const router = express.Router();
router.get("/", sayGoodbye);
module.exports = router;
//# sourceMappingURL=goodbyeRoutes.js.map