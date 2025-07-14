import express from 'express';
import crawl from './crawler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/crawl', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'url param required' });
  try {
    const data = await crawl(url);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`Crawler running on ${PORT}`));