import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

//web pr bahut jghh se data ayega so un sbko kese handle krna hai vo below config kr rhe h


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))   //server 
app.use(cookieParser())    //client k browser ki cookies pr cred oprtaion perform krne k liye 


//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }
