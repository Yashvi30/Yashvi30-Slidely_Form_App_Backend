import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Submission } from "../models/submission";

const dbPath = path.resolve(__dirname, "../db/db.json");

export const submit = (req: Request, res: Response) => {
  const { Name, Email, Phone, GitHub, StopwatchTime } = req.body;

  // Validate required fields
  if (!Name || !Email || !Phone || !GitHub || !StopwatchTime) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  db.submissions.push({ Name, Email, Phone, GitHub, StopwatchTime });
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  res.json({ success: true });
};
