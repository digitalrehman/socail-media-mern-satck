import express from "express";
import authrization from "../middleware/authrization.js";
let router = express.Router();

router.get("/", authrization, (req, res) => {
    res.send("Hello World");
})


export default router;
