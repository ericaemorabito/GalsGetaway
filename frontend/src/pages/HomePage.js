import { useEffect, useState } from "react";
import "../styles/homePage.css";
import { Link } from "react-router-dom";
import Message from '../components/Message'
import friends from '../images/friends.jpeg'

const Home = () => {
  const [trips, setTrips] = useState(null);

  // Request to DB for all trips
  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch("/api/trips");

      const json = await response.json();

      if (response.ok) {
        setTrips(json);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="home-page">
      {/* <Message message={'created'}/> */}
      <p className="title home-title">Your Trips</p>

      <div className="cards-area">
        {trips &&
          trips.map((trip) => (
            <Link to={`/trip/${trip._id}`}>
            <div className="trip-card" key={trip._id}>
              <div className="card-image">
                <img className="uploaded-image" src={friends} alt={trip.title}>
                </img>
              </div>
              <div className="card-text">
               
                  <p className="text">{trip.title}</p>
                  <p className="text">{trip.date}</p>
                
              </div>
            </div>
            </Link>
          ))}
      </div>
      <Link to={"/create"}>
        <button className="button btn-signature">Create a Trip</button>
      </Link>
    </div>
  );
};

export default Home;
