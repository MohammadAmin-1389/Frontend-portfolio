import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "config";
import { connectDB } from "./start/db.js";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";

const app = express();
const port = config.get("port");

app.use(helmet());
app.use(cors({ origin: config.get("corsOrigins") }));
app.use(express.json({ limit: "10kb" }));

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Invalid JSON body" });
  }
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

await connectDB();

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
