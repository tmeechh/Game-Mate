import express from "express"
import { connectDB } from "./config/db.js"
import 'dotenv/config'
import cors from "cors"
import userRouter from "./routes/userRoute.js";



// app confing
const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(express.json());
app.use(cors());


// db connection
connectDB();


app.use("/api/user", userRouter)


app.get("/", (req, res) => {
    res.send("API Working Nice")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
