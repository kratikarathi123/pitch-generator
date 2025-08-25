const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// serve your static files (index.html, style.css)
app.use(express.static("./"));

// endpoint to safely send API key
app.get("/get-key", (req, res) => {
  res.json({ key: process.env.API_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
