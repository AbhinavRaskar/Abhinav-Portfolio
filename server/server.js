import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import contactRouter from "./routes/contact.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by");
app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(",").map(origin => origin.trim())
    : ["http://localhost:5173", "http://localhost:5174"]
}));

app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "portfolio-api" });
});
app.use("/api/contact", contactRouter);

app.use((err, _req, res, _next) => {
  console.error("API error:", err.message);
  res.status(500).json({ message: "An unexpected server error occurred." });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    console.error("Missing MONGODB_URI. Copy .env.example to .env and configure it.");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Portfolio API listening on port ${PORT}`));
  } catch (error) {
    console.error("Could not connect to MongoDB:", error.message);
    process.exit(1);
  }
}
start();
