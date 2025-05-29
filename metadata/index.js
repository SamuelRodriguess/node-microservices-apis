const express = require('express');
const cors = require('cors');
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(cors());
app.use(express.json())
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended:false }))
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.array('upfile', 12), function (req, res, next) {
  
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files were uploaded.' });
  }
  
  res.json({ message: 'Files uploaded successfully', files: req.files.length });
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
