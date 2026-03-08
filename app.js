import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import cors from "cors"
import bodyparser from "body-parser"

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()

const port = process.env.PORT || 8000

import linkroutes from "./routes/link.routes.js"
import userroutes from "./routes/user.routes.js"
import emailroutes from "./routes/email.routes.js"
import postroutes from "./routes/post.routes.js"

app.use("/api/v1/links",linkroutes)
app.use("/api/v1/users",userroutes)
app.use("/api/v1/email",emailroutes)
app.use("/api/v1/post",postroutes)

app.listen(port,() => {
    console.log(`Server running on port : ${port}`)
})