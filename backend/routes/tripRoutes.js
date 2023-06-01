const express = require('express')
const {
  getTrip,
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip
} = require('../controllers/tripController');

const router = express.Router();

// GET all trips (home page)
router.get('/', getTrips)

// GET single trip (view page)
router.get('/:id', getTrip)

// POST new trip
router.post('/', createTrip)

// DELETE a trip
router.delete('/:id', deleteTrip)


module.exports = router;