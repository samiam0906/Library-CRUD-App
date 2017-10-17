const express = require('express')
const router = express.Router()
module.exports = router

const db = require('../db/knex')

router.get('/', async (req, res, next) => {
  const books = await db('books')
  res.json(books)
});
