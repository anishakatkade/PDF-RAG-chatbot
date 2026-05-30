require("dotenv").config();
const express = require("express");
const chatRoute = require("./routes/chatRoute");
const cors = require("cors");
const uploadRoute = require("./routes/uploadRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", chatRoute);
app.get("/", (req, res) => {
  res.send("RAG backend running");
});

app.use("/api", uploadRoute);

app.listen(5000, () => {
  console.log("server running on port 5000");
});


