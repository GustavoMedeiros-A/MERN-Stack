const express = require('express');
const { createWorkout, getWorkout, getSingleWorkout, deleteWorkout, updateWorkout  } = require('../controllers/workoutController');

const router = express.Router();

// GET all workouts
router.get("/", getWorkout)

// GET a single workouts
router.get('/:id', getSingleWorkout)

// POST a new workouts
router.post('/', createWorkout)

// DELETE a  workouts
router.delete('/:id', deleteWorkout)

// UPDATE a new workouts
router.patch('/:id', updateWorkout)

module.exports = router; 