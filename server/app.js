import express from "express";
const port = 5001;
const app = express();

// middlewares
app.use("/api", (req, res) => {
  res.send("Hi");
  console.log(`app listening on port ${port}`);
});

app.listen(port);
