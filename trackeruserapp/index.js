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

const users = [];

app.post('/api/users', (req, res, next) => {
  const { username } = req.body ?? {}

  if (!username) {
    return res.json({ error: "No username provided" });
  }

  const id = new ObjectId().toHexString();

  const newUser = { username, _id: id };
  users.push(newUser);

  res.json(newUser);
  next()
})

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users/:_id/exercises', (req, res) => {
  const { description, duration, date } = req.body ?? {}
  const userId = req.params._id;

  let dateObj;
  if (!date) {
    dateObj = new Date();
  } else {
    dateObj = new Date(date);
    if (isNaN(dateObj)) {
      return res.status(400).json({ error: 'Invalid date format' });
    }
  }
  const user = users.find(elem => elem._id === userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const exercise = {
    description,
    duration: Number(duration),
    date: dateObj
  };

  return res.json({
    _id: user._id,
    username: user.username,
    date: exercise.date,
    duration: exercise.duration,
    description: exercise.description
  });
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
