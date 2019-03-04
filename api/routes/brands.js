const express = require('express');

const router = express.Router();

const brands = [
  { id: 1, name: 'VW' },
  { id: 2, name: 'Yamaha' },
  { id: 3, name: 'Ford' },
  { id: 4, name: 'Fiat' },
];

router.get('/', (req, res, next) => {
  res.json(brands);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  let brand = null;

  for (const i in brands) if (brands[i].id == id) brand = brands[i];

  if (!brand) res.json(brand);
  else res.status(404).send('');
});

module.exports = router;
