const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser');
const ObjectId = require('bson-objectid');

app.use(cors())
app.use(express.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', (req, res, next) => {
  const { username } = req.body ?? {}

  if (!username) {
    return res.json({ error: "No username provided" });
  }

  const id = new ObjectId().toHexString();
  console.log("🚀 ~ app.post ~ ObjectId:", id)

  res.json({
    username: username,
    _id: id
  })

  next()
})



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
