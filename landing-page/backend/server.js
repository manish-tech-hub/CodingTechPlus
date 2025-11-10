import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import courseRoute from "./routes/courseRoute.js";
import blogRoutes from "./routes/blogRoutes.js"

dotenv.config()
connectDB()
const app = express()
app.use(cors())
app.use(express.json())

// Mount the router under /api/courses
app.use("/api/courses", courseRoute);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));