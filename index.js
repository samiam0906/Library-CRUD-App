const express = require('express')
const app = express()

const books = require('./routes/books')
app.use(books)

app.listen(3000, function() {
  console.log("Listening on port 3000...")
});
