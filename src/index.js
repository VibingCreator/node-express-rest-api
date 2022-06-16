import express from "express";
import { urls } from "./routes/urls.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(express.json());

app.use(urls);

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});
