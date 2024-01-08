const express = require("express");
const { createPoetry, getPoetry } = require("../Controller/PoetryControllar");

const router = express.Router();
router.post("/createPoetry", createPoetry);
router.get("/getPoetry", getPoetry);

module.exports = router;
