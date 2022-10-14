import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
const port = 5001;

// middlewares
app.use("/api/user", router);

// Db config
mongoose
  .connect(
    "mongodb+srv://NawImNate:U1jfPMZCuT8lpd8C@natesmernblogcluster.jl1jahv.mongodb.net/NatesMernBlogCluster?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() => console.log(`connected to db, listening to localhost ${port}`))
  .catch((err) => console.log(err));
