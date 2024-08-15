import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Multi-Page App</h1>
      <nav>
        <ul>
          <li><Link to="/todo">To-Do App</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/game">Jig-Jag Jo Game</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
