const express = require('express');
const router = express.Router();
const Submissions = require("../../models/Submissions");

router.get("/", async (req, res) => {
  const perPage = 9
  try {
    const books = await Submissions.find({}).limit(9).skip(req.body.page*perPage).select({ frontPage: 1, title: 1, lid: 1 });
    console.log(req.body.page);
    const bookList = books.filter(book => book.frontPage !== undefined)
    res.json(bookList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

module.exports = router;
