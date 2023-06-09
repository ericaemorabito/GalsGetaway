import { useNavigate } from 'react-router-dom'

import "../styles/landingPage.css";
// images for polaroids
import smile from "../images/smile.jpeg";
import hike from "../images/hike.jpeg";
import car from "../images/car.jpeg";
import heart from "../images/heart.jpeg";
import laugh from "../images/laugh.jpeg";
import cheers from "../images/cheers.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      
      {/* Central Section */}
      <div className="central-section">
        <p className="title central-title">Create memories to last</p>
        <div className="central-text">
          <p className="central-text text">
            plan your girl's trip, take your book club on the road, or plan your
            bachelorette party with everything you need all in one place
          </p>
        </div>
        <button className="button btn-signature" onClick={() => {navigate('/create')}}>Plan a Trip</button>
      </div>

      {/* Polaroid Section */}
      <div className="polaroid-background">
        <div className="polaroid-section">
          <div className="polaroid up">
            <img
              className="polaroid-image"
              src={car}
              alt="two friends on road trip"
            ></img>
          </div>
          <div className="polaroid" alt="">
            <img
              className="polaroid-image"
              src={heart}
              alt="girls making hearts with hands"
            ></img>
          </div>
          <div className="polaroid up">
            <img
              className="polaroid-image"
              src={smile}
              alt="two friends smiling"
            ></img>
          </div>
          <div className="polaroid">
            <img
              className="polaroid-image"
              src={laugh}
              alt="friends laughin in a tulip field"
            ></img>
          </div>
          <div className="polaroid up">
            <img
              className="polaroid-image"
              src={hike}
              alt="friends hiking"
            ></img>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="icon-background">
        <div className="icon-section">
          <div className="icon-area">
            <FontAwesomeIcon icon={faHeart} className="large-icon"/>
            <p className="icon-blurb">Make Bonding Time</p>
          </div>

          <div className="icon-area">
          <FontAwesomeIcon icon={faShare} className="large-icon"/>
            <p className="icon-blurb">Share with Friends</p>
          </div>

          <div className="icon-area">
            <FontAwesomeIcon icon={faPlane} className="large-icon" />
            <p className="icon-blurb">Plan Adventures</p>
          </div>
        </div>
      </div>

      {/* Card Call to Act Section */}
      <div className="action-background">
      <div className="action-section">
        <div className="action-card">
          <p className="action-title">Make memories</p>
          <p className="action-text">Plan your trip and share with friends</p>
          <button id="action-button" className="button btn-signature" onClick={() => {navigate('/create')}}>
            Plan a Trip
          </button>
        </div>
        <div className="action-card">
          <img className="action-image" src={cheers} alt="groups of friends cheersing wine"></img>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
