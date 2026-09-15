"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const goodbyeRoutes = require("./routes/goodbyeRoutes");
const app = express();
app.use(express.json());
app.use("/goodbye", goodbyeRoutes);
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map