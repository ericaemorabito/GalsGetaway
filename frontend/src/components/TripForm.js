import { useState } from "react";
import "../styles/tripForm.css";

const TripForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [accomodation, setAccomodtion] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [packing, setPacking] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trip = { title, date, location, accomodation, itinerary, packing };

    const response = await fetch("/api/trips", {
      method: "POST",
      body: JSON.stringify(trip),
      header: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      // console.log(json.error);
    }

    if (response.ok) {
      setError(null);
      console.log("New trip added to DB");
      console.log(trip);
      setTitle("");
      setDate("");
      setAccomodtion("");
      setLocation("");
      setItinerary("");
      setPacking("");
    }
  };

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      {/* Title  */}
      <label for="form-title">Trip Title</label>
      <input
        type="text"
        id="form-title"
        className="input-line"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>

      {/* Dates  */}
      <label for="form-dates">Dates</label>
      <input type="text" id="form-dates" className="input-line" onChange={(e) => setDate(e.target.value)} value={date}></input>

      {/* Location  */}
      <label for="form-location">Location</label>
      <input type="text" id="form-location" className="input-line" onChange={(e) => setLocation(e.target.value)} value={location}></input>

      {/* Accomdation  */}
      <label for="form-accomodation">Accomdation</label>
      <input type="text" id="form-accomodation" className="input-line" onChange={(e) => setAccomodtion(e.target.value)} value={accomodation}></input>

      {/* Itinerary  */}
      <label for="form-itinerary">Itinerary</label>
      <input type="text" id="form-itinerary" className="input-text" onChange={(e) => setItinerary(e.target.value)} value={itinerary}></input>

      {/* Packing  */}
      <label for="form-packing">Packing</label>
      <input type="text" id="form-packing" className="input-text" onChange={(e) => setPacking(e.target.value)} value={packing}></input>

      {/* Create new trip button --> req to DB  */}
      <div className="btn-area">
        <button className="button btn-signature">Create</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default TripForm;
