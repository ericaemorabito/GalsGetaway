import "../styles/landingPage.css";
// images for polaroids
import smile from '../images/smile.jpeg'
import hike from '../images/hike.jpeg'
import car from '../images/car.jpeg'
import heart from '../images/heart.jpeg'
import laugh from '../images/heart.jpeg'
import cheers from '../images/cheers.jpeg'

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Big Background Section */}
      <div className="big-background">
        <p className="title central-title">Create memories to last</p>
        <div className='central-text'>
          <p className="text">
            plan your girl's trip, take your book club on the road, or plan your bachelorette party with
            everything you need all in one place
          </p>
        </div>
        <button className="button btn-signature">Plan a Trip</button>
      </div>

      {/* Polaroid Section */}
      <div className='polaroid-section'>
        <div className='polaroid up' style={{backgroundImage: `url(${smile})`}}>
        </div>
        <div className='polaroid' style={{backgroundImage: `url(${hike})`}}>
        </div>
        <div className='polaroid up' style={{backgroundImage: `url(${car})`}}>
        </div>
        <div className='polaroid' style={{backgroundImage: `url(${heart})`}}>
        </div>
        <div className='polaroid up' style={{backgroundImage: `url(${laugh})`}}>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
