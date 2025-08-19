import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/gps", async (req, res) => {
  try {
    console.log("Tracker sent data:", req.body);

    const response = await fetch(
      "https://axistify-backend-35fba6c65504.herokuapp.com/api/webhook/gps-location",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      }
    );

    const result = await response.text();
    console.log("Heroku response:", result);

    res.status(200).json({ status: "forwarded", heroku: result });
  } catch (error) {
    console.error("Relay error:", error);
    res.status(500).json({ error: "Relay failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Relay running on port ${PORT}`));
