'use strict';

const router = require('express').Router();

router.get('/running', (req, res) => res.send({ ok: true }));
router.get('/hello', (req, res) => res.status(200).send('hello world'));

// No routes matched? 404.
router.use((req, res) => res.status(404).end());

module.exports = router;
