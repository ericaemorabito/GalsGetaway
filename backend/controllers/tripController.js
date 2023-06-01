const Trips = require('../models/tripModel')
const mongoose = require('mongoose')

// GET all trips
const getTrips = async (req, res) => {
  const trips = await Trips.find().sort({createdAt: -1});

  res.status(200).json(trips)
}

// GET single trip
const getTrip = async(req, res) => {
  const { id } = req.params 

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such trip found'})
  }

  const trip = await Trips.findById(id)

  if(!trip){ 
    return res.status(404),json({error: 'No such trip found'})
  }

  res.status(200).json(trip)
}

// CREATE new trip
const createTrip = async (req, res)=> {
  const {title, location, date, accomodation, itinerary, packing} = req.body;

  // add doc to db
  try {
    const trip = await Trips.create({title, location, date, accomodation, itinerary, packing})
    res.status(200).json(trip)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// UPDATE a trip
const updateTrip = async (req, res) => {
  const { id } = req.params 
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such trip'})
  }

  const trip = await Trips.findOneAndUpdate({_id: id}, {...req.body})

  if(!trip){ 
    return res.status(400),json({error: 'No such trip'})
  }

  res.status(200).json(trip)
}

// DELETE a trip
const deleteTrip = async (req, res) => {
  const { id } = req.params 
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such trip'})
  }

  const trip = await Trips.findOneAndRemove({_id: id})

  if(!trip){ 
    return res.status(400),json({error: 'No such trip'})
  }

  res.status(200).json(trip)
}

module.exports = {
  getTrip,
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip
}