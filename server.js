const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// Example backend API
app.get("/api/message", (req, res) => {
  res.json({ message: "Welcome to the bestest website ever!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
