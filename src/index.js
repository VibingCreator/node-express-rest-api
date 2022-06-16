import express from "express";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});
