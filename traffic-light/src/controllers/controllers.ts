import { Request, Response } from "express";
// import fs from "fs";
// import path from "path";

const index = (req: Request, res: Response) => {
    res.render("index");
};

const getTest = (req: Request, res: Response) => {
    console.log("Client connected");
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const intervalId = setInterval(() => {
        const date = new Date().toLocaleString();
        res.write(`data: ${date}\n\n`);
    }, 1000);

    res.on("close", () => {
        console.log("Client closed connection");
        clearInterval(intervalId);
        res.end();
    });

    // res.send("getTest");
    // res.json("getTest");
};

const postTest = (req: Request, res: Response) => {
    console.log(JSON.stringify(req.body));
    res.send("postTest");
};

export default { index, getTest, postTest };
