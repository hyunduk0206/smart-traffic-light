import { Request, Response } from "express";
// import fs from "fs";
// import path from "path";

const index = (req: Request, res: Response) => {
    res.render("index");
};

const getTest = (req: Request, res: Response) => {
    // res.send("getTest");
    res.json("getTest");
};

const postTest = (req: Request, res: Response) => {
    console.log(JSON.stringify(req.body));
    res.send("postTest");
};

export default { index, getTest, postTest };
