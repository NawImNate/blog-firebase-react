import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 5001;

// middlewares
// app.use("/api", (req, res, next) => {
//   res.send("Hi");
//   console.log(`app listening on port ${port}`);
// });

mongoose
  .connect(
    "mongodb+srv://NawImNate:U1jfPMZCuT8lpd8C@natesmernblogcluster.jl1jahv.mongodb.net/NatesMernBlogCluster?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() => console.log(`connected to db, listening to localhost ${port}`))
  .catch((err) => console.log(err));
