const express = require("express");
const app = express();

app.use(express.text()); // X1 tracker sends raw text
app.post("/gps", (req, res) => {
  console.log("Tracker Data:", req.body);
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
