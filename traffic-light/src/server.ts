import express from "express";
import router from "./routes/routes";

// express app
const app = express();
const port = 3000;

// middleware and static files
app.use(express.static("public"));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
});
