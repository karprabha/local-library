import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("respond with a resource");
});

export default router;