const express = require("express");
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true })); // To parse the incoming requests with urlencoded payloads and make it available under req.body property
app.use(express.json()); // To parse the incoming requests with JSON payloads and make it available under req.body property
app.use(router);

router.use("/api/menu", require("./menu"))
router.use("/api/item", require("./item"))
router.use("/api/mess", require("./mess"))
router.use("/api/user", require("./user"))

router.get("/data", async (req, res) => {
    res.status(200).send("Hi");
});
module.exports = app;