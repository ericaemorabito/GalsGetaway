import React from 'react'

const tripCard = ({ trip }) => {
  return (
    <div>tripCard: 
      <p key={trip._id}>
        {trip.title}</p>
    </div>
  )
}

export default tripCard