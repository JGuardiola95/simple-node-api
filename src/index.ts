import express from 'express';
import path from 'path';

const app = express();
const port = 5001;

app.use(express.static('static'));

app.get('/', (req, res) => {
  // sending back an HTML file that a browser can render on the screen.
  res.sendFile(path.resolve('src/pages/index.html'));
});

app.listen(port, () => {
  console.log(
    `Simple app listening at http://localhost:${port}`
  );
});
