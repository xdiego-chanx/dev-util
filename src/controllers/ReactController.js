import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reactController = Router();
const views = path.join(__dirname, "..", "views");

reactController.get("/", (req, res) => {
    return res.render(path.join(views, "react.ejs"), {
        layouts: path.join(__dirname, "..", "layouts")
    });
})

reactController.post("/", (req, res) => {
    
})

export default reactController;