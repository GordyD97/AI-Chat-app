import { OpenAI } from "openai"; // Import the OpenAIApi component
import openAiRoutes from "./routes/openai.js";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";


// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// OpenAI configuration
export const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
});

app.use("/openai", openAiRoutes);
app.use("/auth", authRoutes);

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    });
}

// Server startup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
