/* eslint-disable no-undef */
import express, { json, urlencoded } from 'express';
import { parts, manufacturingProcesses } from './data.js';
import { path } from 'path'; 
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../parts-list/build')));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Expose-Headers', 'per-page, page-number, total-entries, total-pages');
  next();
});

const pageSize = 5;

const getPage = (pageNumber) => {
  const startingIndex = (pageNumber - 1) * pageSize;
  const endingIndex = startingIndex + pageSize;
  return parts.slice(startingIndex, endingIndex);
};

app.get('/parts', (req, res) => {
  const pageNumber = req.query.page || 1;
  const totalPages = Math.ceil(parts.length / pageSize);
  const result = getPage(pageNumber);

  res.setHeader('per-page', pageSize);
  res.setHeader('page-number', pageNumber);
  res.setHeader('total-entries', parts.length);
  res.setHeader('total-pages', totalPages);

  return res.json({ data: result });
});

app.get('/manufacturing_processes', (req, res) => {
  return res.json({ data: manufacturingProcesses });
});

app.put('/parts/:id', (req, res) => {
  console.log('PUT to part ID:', req.params.id);
  return res.json({ data: req.body });
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`Server running: https://localhost:${PORT}`));
