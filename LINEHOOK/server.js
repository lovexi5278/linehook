const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("LINE Webhook is running on Railway");
});

app.post("/webhook", (req, res) => {
  console.log("收到 LINE Webhook：", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});