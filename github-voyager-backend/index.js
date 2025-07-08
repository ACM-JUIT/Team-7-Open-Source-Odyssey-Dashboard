const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/github/profile/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});

app.get('/github/repos/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: 'Repositories not found' });
  }
});

app.listen(PORT, () => {
  console.log(` Backend running on http://localhost:${PORT}`);
});
