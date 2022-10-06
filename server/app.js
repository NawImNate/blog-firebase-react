import express from "express";

const app = express();

// middlewares
app.use("/api", (req, res, next) => {
  res.send("Hi");
});

app.listen(5000);
