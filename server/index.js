import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"

dotenv.config()
console.log("MONGO_URI =", process.env.MONGO_URI)
const app = express()

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

// health check
app.get("/", (req, res) => {
  res.send("Backend running")
})
app.post("/api/join", (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ message: "Email required" })
  }

  console.log("EMAIL RECEIVED:", email)
  res.json({ message: "Joined successfully" })
})


const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`)
})