// components
import TripForm from "../components/TripForm";
import "../styles/createTrip.css";

const CreateTrip = () => {
  return (
    <div className="create-page">
      {/* Form Side */}
      <TripForm />

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
