import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/flags", async (_req, res) => {});

app.post("/flags", async (req, res) => {});

app.listen(4000, () => {
  console.log("Control Plane running on http://localhost:4000");
});
