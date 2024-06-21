import express from "express";
import { ping } from "./controllers/pingController";
import { read } from "./controllers/readController";
import { submit } from "./controllers/submitController";

const app = express();

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
