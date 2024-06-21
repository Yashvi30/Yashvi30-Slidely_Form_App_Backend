import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const dbPath = path.resolve(__dirname, "../db/db.json");

export const read = (req: Request, res: Response) => {
  const { index } = req.query;
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  if (
    !index ||
    isNaN(Number(index)) ||
    Number(index) < 0 ||
    Number(index) >= db.submissions.length
  ) {
    return res.status(400).json({ error: "Invalid index" });
  }

  res.json(db.submissions[Number(index)]);
};
