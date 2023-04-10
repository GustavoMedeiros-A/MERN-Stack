const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({msg: "GET all workouts"})
})

// GET a single workouts
router.get('/:id', (req, res) => {
    res.json({msg: "GET a single workouts"})
})

// POST a new workouts
router.post('/', (req, res) => {
    res.json({msg: "POST a new workouts"})
})

// DELETE a  workouts
router.delete('/:id', (req, res) => {
    res.json({msg: "DELETE a workouts"})
})

// UPDATE a new workouts
router.patch('/:id', (req, res) => {
    res.json({msg: "UPDATE a new workouts"})
})

module.exports = router; 