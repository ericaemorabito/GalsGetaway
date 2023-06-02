import "../styles/createTrip.css";

const CreateTrip = () => {
  return (
    <div className="create-page">

      {/* Form Side */}
      <div className="form-side">

        <p className="subtitle" id="create-page-title">
          Create Trip
        </p>

        <form className="trip-form">

          {/* Title  */}
          <label for="form-title" className="form-label">
            Trip Title
          </label>
          <input type="text" id="form-title" className="input-line"></input>

          {/* Location  */}
          <label for="form-location" className="form-label">
            Location
          </label>
          <input type="text" id="form-location" className="input-line"></input>

          {/* Dates  */}
          <label for="form-dates" className="form-label">
            Dates
          </label>
          <input
            type="text"
            id="form-dates"
            className="input-line"
          ></input>

      {/* Itinerary  */}
          <label for="form-itinerary" className="form-label">
            Itinerary
          </label>
          <input type="text" id="form-itinerary" className="input-text"></input>

      {/* Packing  */}
          <label for="form-packing" className="form-label">
            Packing
          </label>
          <input type="text" id="form-packing" className="input-text"></input>

      {/* Create new trip button --> req to DB  */}
          <button className="button btn-signature">Create</button>
        </form>
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
