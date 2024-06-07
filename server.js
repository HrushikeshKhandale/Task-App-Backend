const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/tasks", taskRoutes);

// Error handling
app.use((req, res) => {
  try {
    console.log("Hello World!");
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Task API is running at http://localhost:${port}`);
});
