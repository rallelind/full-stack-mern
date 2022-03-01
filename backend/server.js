const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const productRouter = require("./router/productRoutes");
const userRouter = require("./router/userRoutes");
const paymentRouter = require("./router/paymentRouter")
const dotenv = require("dotenv")

dotenv.config();

mongoose.connect(process.env.mongoURI, () => {
    console.log("Mongoose is connected");
});
 

const app = express()

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"))

app.use('/uploads', express.static('uploads'));
app.use(express.json());


app.use("/api/product", productRouter)
app.use("/", userRouter)
app.use("/", paymentRouter)


app.listen(4000, () => {
    console.log("Server is listening on port 4000")
})