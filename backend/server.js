import express from "express";
import router from "./src/router/router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config"
import { serve } from "inngest/express";
import { inngest, functions } from "./src/inngest/index.js";
import dbConnection from "./src/config/db.js";
let app = express();
let port = process.env.PORT || 3000;
dbConnection()

app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api", router);
app.use("/api/inngest", serve({ client: inngest, functions }));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})