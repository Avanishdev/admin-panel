require("dotenv").config();
const express=require("express")
const app=express();
const PORT=8080;
const authRoute=require("./routers/auth-route");
const contactRoute=require("./routers/contact-route")
const connectDB=require("./utils/db");
const errorHandler=require("./middleware/error-middleware")
const cors=require("cors")
// const mongoose=require("mongoose")
// const URL="mongodb+srv://user:user%40123@cluster0.d5ibn97.mongodb.net/"

//Handling CORS Policy issue for different ports
const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));
//middleware
app.use(express.json());
//mount the router
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
//error middleware
app.use(errorHandler);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Backend is running at PORT ${PORT}`);
    })
})

// connectDB.connect(()=>console.log("Db connection successful!"));

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})