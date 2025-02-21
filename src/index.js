import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import reactController from "./controllers/reactController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const views = path.join(__dirname, "views");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/react", reactController);

app.get("/", (req, res) => {
    return res.render(path.join(views, "index.ejs"), {
        layouts: path.join(__dirname, "layouts")
    });
});

app.listen(PORT, () => {
    console.log("Server running at http://127.0.0.1:%i", PORT);
});
