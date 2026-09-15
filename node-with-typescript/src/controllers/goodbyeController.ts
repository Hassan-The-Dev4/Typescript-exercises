import type { Response } from "express";
import type { GoodbyeRequest } from "../types/requestTypes";

const sayGoodbye = (
  req: GoodbyeRequest,
  res: Response
) => {
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