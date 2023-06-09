import { useState } from "react";
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [accomodation, setAccomodtion] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [packing, setPacking] = useState("");
  const [error, setError] = useState(null);
  const [trash, setTrash] = useState(false);

  // TODO: make PUT request
  const handleUpdate = async (e) => {
    e.preventDefault();
    
    const trip = { title, date, location, accomodation, itinerary, packing };

    const response = await fetch(`/api/trips/${trip._id}`, {
      method: "PUT",
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
      console.log("Trip updated in DB");
      setTitle(trip.title);
      setDate(trip.date);
      setAccomodtion(trip.accomodation);
      setLocation(trip.location);
      setItinerary(trip.itinerary);
      setPacking(trip.packing);
    }
  };

  //TODO: make DELETE request NAVIGATE BACK HOME
   const handleDelete = async () => {
    const response = await fetch('/api/trips/' + trip._id, {
      method: 'DELETE'
    });

    const json = await response.json();
    
    if (!response.ok) {
      setError(json.error);
      console.log(json.error);
    }

    if(response.ok){
      console.log('Deleted the trip')
      navigate(-1);
    }

   }

  return (
    <form className="trip-form">
      {/* Title  */}
      <label for="form-title">Trip Title</label>
      <input
        type="text"
        id="form-title"
        className="input-line"
        onChange={(e) => setTitle(e.target.value)}
        defaultValue={trip.title}
        // placeholder={title}
      ></input>

      {/* Dates  */}
      <label for="form-dates">Dates</label>
      <input
        type="text"
        id="form-dates"
        className="input-line"
        defaultValue={trip.date}
        onChange={(e) => setDate(e.target.value)}
      ></input>

      {/* Location  */}
      <label for="form-location">Location</label>
      <input
        type="text"
        id="form-location"
        className="input-line"
        defaultValue={trip.location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>

      {/* Accomdation  */}
      <label for="form-accomodation">Accomdation</label>
      <input
        type="text"
        id="form-accomodation"
        className="input-line"
        defaultValue={trip.accomodation}
        onChange={(e) => setAccomodtion(e.target.value)}
      ></input>

      {/* Itinerary  */}
      <label for="form-itinerary">Itinerary</label>
      <input
        type="text"
        id="form-itinerary"
        className="input-text"
        defaultValue={trip.itinerary}
        onChange={(e) => setItinerary(e.target.value)}
      ></input>

      {/* Packing  */}
      <label for="form-packing">Packing</label>
      <input
        type="text"
        id="form-packing"
        className="input-text"
        defaultValue={trip.packing}
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
          <button className="button btn-red" id="download-btn" onClick={handleDelete}>
            Delete Trip {deleteIcon}
          </button>
        </div>
      )}

      {/* Update trip button --> req to DB  */}
      <div className="update-btn-area">
        <button className="button btn-signature" onClick={handleUpdate}>
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