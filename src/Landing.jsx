import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import the CSS file
import videoBg from './assets/animation.mp4';

function Landing() {
  return (
    <div className="landing">
      <Link to="/login">
        <div className="main">
          <video src={videoBg} autoPlay loop muted />
        </div>
      </Link>
    </div>
  );
}

export default Landing;
