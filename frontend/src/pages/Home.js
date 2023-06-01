import { useEffect, useState } from "react";

// components
import TripCard from '../components/TripCard';

const Home = () => {
  const [trips, setTrips] = useState(null)

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch('/api/trips')

      const json = await response.json()

      if(response.ok){
        setTrips(json)
      }
    }

    fetchTrips()
  }, [])

  return (
    <div>
      {trips && trips.map((trip) => (
        // <p key={trip._id}>{trip.title}</p>
        <TripCard key={trip._id} trip={trip}/>
      ))}
    </div>
  )
}

export default Home