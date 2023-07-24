const express = require('express');
const router = express.Router();
const Submissions = require("../../models/Submissions");

router.get("/", async (req, res) => {
  try {
    const books = await Submissions.find({}).limit(9).select({ frontPage: 1, _id: 0 });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

module.exports = router;
