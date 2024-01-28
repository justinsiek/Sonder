import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>Welcome to our website!</h1>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}

export default Landing;