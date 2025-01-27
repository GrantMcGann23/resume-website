import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Schema and Model
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", MessageSchema);

// Routes
app.post("/api/messages", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving message", error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
