import express from "express";
const app = express();

// Port settings
const PORT = 3000;

// Listening on the default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App started on > http://localhost:${PORT}`);
});
