
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();




const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

// Schema & Model
const configSchema = new mongoose.Schema({
  _id: String,  // configId is used as _id
  data: [[String]],
  remark: String,
});

const Config = mongoose.model("Configuration", configSchema);

// GET endpoint
app.get('/api/configurations/:id', async (req, res) => {
  try {
    const config = await Configuration.findOne({ configurationId: req.params.id });

    console.log('Requested ID:', req.params.id);      // Debug log
    console.log('Found document:', config);           // Debug log

    if (!config) {
      return res.status(404).json({ message: "No data found for this configId" });
    }

    return res.json(config.data);  // This should be your 2D array
  } catch (err) {
    console.error('Backend error:', err.message);    // Show actual crash
    return res.status(500).json({ message: "Server error" });
  }
});


// PUT endpoint
app.put("/api/configurations/:id", async (req, res) => {
  const configId = req.params.id;
  const { remark } = req.body;

  try {
    await Config.findByIdAndUpdate(configId, { remark });
    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
