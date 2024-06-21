import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Submission } from "../models/submission";

const dbPath = path.resolve(__dirname, "../db/db.json");

export const submit = (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newSubmission: Submission = {
    name,
    email,
    phone,
    github_link,
    stopwatch_time,
  };

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading database" });
    }

    const submissions = data ? JSON.parse(data) : [];
    submissions.push(newSubmission);

    fs.writeFile(dbPath, JSON.stringify(submissions, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error writing to database" });
      }
      res.status(201).json({ success: true });
    });
  });
};
