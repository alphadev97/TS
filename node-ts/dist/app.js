import express from "express";
import userRoute from "./routers/user.js";
const app = express();
app.use("/user", userRoute);
app.get("/", (req, res) => {
    res.send("Last");
});
app.listen(4000, () => {
    console.log("Server is working");
});
