require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dns = require('node:dns');

app.use(cors());
app.use(express.json());
app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use(bodyParser.urlencoded({ extended: false }));

const urlDatabase = {};
let urlCount = 1;

app.post("/api/shorturl", function (req, res) {
  const { url } = req.body ?? {};

  if (!url) {
    return res.json({ error: "No URL provided" });
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch (error) {
    return res.json({ error: "invalid url" });
  }

  dns.lookup(parsedUrl.hostname, (err) => {
    if (err) {
      return res.json({ error: "dns: invalid url" });
    }

    for (const key in urlDatabase) {
      if (urlDatabase[key] === url) {
        return res.json({ original_url: url, short_url: Number(key) });
      }
    }

    urlDatabase[urlCount] = url;
    res.json({ original_url: url, short_url: urlCount });
    urlCount++;
  });
});


app.get('/api/shorturl/:short_url', (req, res) => {
  const shortUrl = req.params.short_url;
  const originalUrl = urlDatabase[shortUrl];

  if (originalUrl) {
    return res.redirect(originalUrl);
  } else {
    return res.json({ error: 'invalid url' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});