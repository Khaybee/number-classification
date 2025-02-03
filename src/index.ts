import express from "express";
import env from "dotenv";
env.config();
import cors from "cors";
import bodyParser from "body-parser";
import classifyRoutes from "./classifications/routes"


const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", classifyRoutes); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});