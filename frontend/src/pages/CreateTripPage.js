// components
import TripForm from "../components/TripForm";
import "../styles/createTripPage.css";

const CreateTrip = () => {
  return (
    <div className="create-page">
      {/* Form Side */}
      <div className="form-side">
        <p className="subtitle" id="create-page-title">
          Create Trip
        </p>
        <TripForm />
      </div>

      {/* Linear Gradient Styled Side */}
      <div className="gradient-side">
        <div className="quote-area">
          <p className="title" id="quote">
            "What happens in Vegas, stays in Vegas."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
