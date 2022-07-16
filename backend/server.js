import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();

const __dirname = path.resolve();

if (process.env.APP_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is up and running...");
  });
}

app.listen(
  process.env.APP_PORT,
  console.log(
    `Server running in ${process.env.APP_ENV} mode on port ${process.env.APP_PORT}`
  )
);
