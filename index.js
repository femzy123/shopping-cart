const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cartRoute = require("./routes/carts");

app.use(cors());
dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Working Perfectly!");
});

app.use("/api/carts", cartRoute);

app.listen(port, () => {
  console.log("Shopping cart server running on port " + port);
});