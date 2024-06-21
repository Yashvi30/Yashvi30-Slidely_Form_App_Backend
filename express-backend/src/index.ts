import express, { Request, Response } from "express";
import { ping } from "./controllers/pingController";
import { read } from "./controllers/readController";
import { submit } from "./controllers/submitController";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

const app = express();
app.use(bodyParser.json());

// Define root route handler
app.get("/", (req, res) => {
  res.send("Welcome to my API"); // Replace with your desired response
});

// Other route definitions
app.get("/ping", ping);
app.get("/read", read);
app.post("/submit", submit);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
