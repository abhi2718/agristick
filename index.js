const express = require("express"),
    port = 8000,
  app = express();

app.get("/", (req, res) => {
    console.log("Hello, World!");
    res.status(200).json({
        message: "Hello, World!",
        success: true
    });
});

app.get("/api/agristick", (req, res) => {
    const { query } = req;
    console.log("Body is ----->", query);
    res.status(200).json(query);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})