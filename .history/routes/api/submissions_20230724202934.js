const express = require("express");
const router = express.Router();
const Submissions = require("../../models/Submissions");
const pageNumber = 0;
router.get("/", async (req, res) => {
  try {
    const books = await Submissions.find({})
      .limit(9)
      .select({ frontPage: 1, title: 1, lid: 1 });
    const bookList = books.filter((book) => book.frontPage !== undefined);
    res.json(bookList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

router.get("/more", async (req, res) => {
  const perPage = 9;
  try {
    const books = await Submissions.find({})
      .skip(pageNumber * perPage)
      .limit(9)
      .select({ frontPage: 1, title: 1, lid: 1 });
    const bookList = books.filter((book) => book.frontPage !== undefined);
    res.json(bookList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});
module.exports = router;
