import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
