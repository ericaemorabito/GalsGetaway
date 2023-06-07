import { useState } from "react";
import "../styles/tripForm.css";
import "../styles/updateForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const saveIcon = <FontAwesomeIcon icon={faFloppyDisk} />;
const downloadIcon = <FontAwesomeIcon icon={faDownload} />;
const menuIcon = <FontAwesomeIcon icon={faEllipsis} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const UpdateForm = ({ trip }) => {
  const [title, setTitle] = useState(trip.title);
  const [dates, setDates] = useState(trip.dates);
  const [location, setLocation] = useState(trip.location);
  const [accomodation, setAccomodtion] = useState(trip.accomodation);
  const [itinerary, setItinerary] = useState(trip.itinerary);
  const [packing, setPacking] = useState(trip.packing);
  const [error, setError] = useState(null);
  const [trash, setTrash] = useState(false);

  // TODO: make update function
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title);
    const trip = { title, dates, location, accomodation, itinerary, packing };

    const response = await fetch("/api/trips", {
      method: "POST",
      body: JSON.stringify({ trip }),
      header: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(json.error);
    }

    if (response.ok) {
      setError(null);
      console.log("New trip added to DB");
      setTitle("");
      setDates("");
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
        placeholder={title}
      ></input>

      {/* Dates  */}
      <label for="form-dates">Dates</label>
      <input
        type="text"
        id="form-dates"
        className="input-line"
        placeholder={dates}
        onChange={(e) => setDates(e.target.value)}
      ></input>

      {/* Location  */}
      <label for="form-location">Location</label>
      <input
        type="text"
        id="form-location"
        className="input-line"
        placeholder={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>

      {/* Accomdation  */}
      <label for="form-accomodation">Accomdation</label>
      <input
        type="text"
        id="form-accomodation"
        className="input-line"
        placeholder={accomodation}
        onChange={(e) => setAccomodtion(e.target.value)}
      ></input>

      {/* Itinerary  */}
      <label for="form-itinerary">Itinerary</label>
      <input
        type="text"
        id="form-itinerary"
        className="input-text"
        placeholder={itinerary}
        onChange={(e) => setItinerary(e.target.value)}
      ></input>

      {/* Packing  */}
      <label for="form-packing">Packing</label>
      <input
        type="text"
        id="form-packing"
        className="input-text"
        placeholder={packing}
        onChange={(e) => setPacking(e.target.value)}
      ></input>

      {/* 3 Dot Menu */}
      <div className="menu">
        <div
          id="menu-icon"
          onClick={() => {
            setTrash(!trash);
          }}
        >
          {menuIcon}
        </div>
      </div>

      {/* Trash Button */}
      {trash && (
        <div className="delete-btn-area">
          <button className="button btn-red" id="download-btn">
            Delete Trip {deleteIcon}
          </button>
        </div>
      )}

      {/* Update trip button --> req to DB  */}
      <div className="update-btn-area">
        <button className="button btn-signature">
          Save Changes {saveIcon}
        </button>
        <button className="button btn-light" id="download-btn">
          Download {downloadIcon}
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default UpdateForm;
