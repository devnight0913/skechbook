const Book = require("../../models/Book");
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({}).limit(9);
    res.json(books);
    console.log(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

module.exports = router;
