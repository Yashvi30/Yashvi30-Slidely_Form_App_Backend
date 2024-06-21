import express from "express";
import pingRouter from "./routes/ping";
import readRouter from "./routes/read";
import submitRouter from "./routes/submit";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/ping", pingRouter);
app.use("/read", readRouter);
app.use("/submit", submitRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
