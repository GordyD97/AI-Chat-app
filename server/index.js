import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";


// configurations 
dotenv.config();
const app = express();
app.use(express.json);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors);

// open Ai configuration 
const openai = new OpenAI({
    apiKey: 'OPEN_API_KEY', // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',


// server startup

const PORT  = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

