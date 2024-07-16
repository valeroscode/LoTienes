import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticFilesDir = path.join(__dirname, 'dist');

app.use(express.static(staticFilesDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesDir, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:10000`);
});
