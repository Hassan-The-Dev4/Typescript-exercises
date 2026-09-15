"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayGoodbye = (req, res) => {
    const { name } = req.query;
    if (!name || typeof name !== "string") {
        return res.status(400).json({
            error: "Name is required and must be a string"
        });
    }
    return res.json({
        farewell: `Goodbye, ${name}`
    });
};
module.exports = { sayGoodbye };
//# sourceMappingURL=goodbyeController.js.map