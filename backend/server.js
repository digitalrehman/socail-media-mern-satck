import express from "express";
import router from "./src/router/router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { serve } from "inngest/express";
import { inngest, functions } from "./src/inngest/index.js";
let app = express();
let port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api", router);
app.use("/api/inngest", serve({ client: inngest, functions }));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})