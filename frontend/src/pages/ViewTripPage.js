import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/viewTripPage.css";
import UpdateForm from "../components/UpdateForm";
import smile from "../images/smile.jpeg";

const ViewTrip = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState("null");

  // Request to DB for trip based on id
  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trips/${id}`);

      const json = await response.json();

      if (response.ok) {
        setTrip(json);
      }
    };

    fetchTrip();
    // console.log(trip)
  }, [id]);

  return (
    <div className="view-page">
      {/* Form Side */}
      <div className="update-form-side">
        <p className="subtitle" id="view-page-title">
          {trip.title}
        </p>
        <UpdateForm trip={trip} />
      </div>

      {/* Image & Map Side */}
      <div className="images-side">
        <div className="trip-image">
          <img src={smile} alt='friend smiling on beach' className="uploaded-image" ></img>
        </div>
        <div className="trip-image"></div>
      </div>
    </div>
  );
};

export default ViewTrip;
