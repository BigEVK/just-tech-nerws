const router = require('express').Router();
const { User } = require('../../models');

// Get /api/users
router.get('/', (req, res) => {});

// Get /api/users/1
router.get('/:id', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;