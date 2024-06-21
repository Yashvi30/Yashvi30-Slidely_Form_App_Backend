import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const dbPath = path.resolve(__dirname, "../db/db.json");

export const read = (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string);

  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: "Invalid index" });
  }

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading database" });
    }

    const submissions = data ? JSON.parse(data) : [];

    if (index >= submissions.length) {
      return res.status(404).json({ error: "Submission not found" });
    }

    res.json(submissions[index]);
  });
};