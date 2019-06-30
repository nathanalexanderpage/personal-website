import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div className="header">
        <a href="/" className="no-style no-select">
          <h1>
            nathan
          </h1>
          <h1>
            <span className="faded">alexander</span>
          </h1>
          <h1>
            page
          </h1>
        </a>
      </div>
      <div className="trans t1">
      </div>
      <div className="trans t2">
      </div>
      <nav>
        <ul className="navlist">
          <Link to="/">
            <li className="navitem">
              Top
            </li>
          </Link>
          <Link to="/about">
            <li className="navitem">
              About
            </li>
          </Link>
          <Link to="/projects">
            <li className="navitem">
              Skills
            </li>
          </Link>
          <Link to="/projects">
            <li className="navitem">
              Projects
            </li>
          </Link>
          <Link to="/projects">
            <li className="navitem">
              Resume
            </li>
          </Link>
        </ul>
      </nav>
      <div className="trans t3">
      </div>
      <div className="trans t4">
      </div>
      <div className="trans t5">
      </div>
      <div className="trans t6">
      </div>
      <div className="trans t7">
      </div>
      <div className="trans t8">
      </div>
      <div className="trans t9">
      </div>

      <div className="links">
        <div className="links-content">
          <div>
            <h4>
              -Contact-
            </h4>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/nathanalexanderpage/" className="contact-flex">
              <div className="contact-icon">
                <img src="/linkedin-icon.png" className="contact-tile" />
              </div>
              <div className="contact-spacer">
              </div>
              <div className="contact-text">
                /nathanalexanderpage
              </div>
            </a>
          </div>
          <div>
            <a href="https://github.com/nathanalexanderpage" className="contact-flex">
              <div className="contact-icon">
                <img src="/github-icon.png" className="contact-tile" />
              </div>
              <div className="contact-spacer">
              </div>
              <div className="contact-text">
                /nathanalexanderpage
              </div>
            </a>
          </div>
          <div className="contact-flex">
            <div className="contact-icon">
              <img src="/phone-icon.png" className="contact-tile" />
            </div>
            <div className="contact-spacer">
            </div>
            <div className="contact-text">
              (425) 829-2988
            </div>
          </div>
          <div className="contact-flex">
            <div className="contact-icon">
              <img src="/email-icon.png" className="contact-tile" />
            </div>
            <div className="contact-spacer">
            </div>
            <div className="contact-text">
              <div>
                nathanalexander
              </div>
              <div>
                page@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="links">
        <div className="links-content">
          <div>
            <h4>
              -Contact-
            </h4>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/nathanalexanderpage/">
              <div className="icon-div-holder">
                <div className="contact-icon">
                  <img src="/linkedin-icon.png" className="contact-tile" />
                </div>
              </div>
              <div className="contact-spacer-inline">
              </div>

              <div className="contact-text-inline">
                /nathanalexanderpage
              </div>



            </a>
          </div>
          <div>
            <a href="https://github.com/nathanalexanderpage" className="contact-flex">
              <div className="contact-icon">
                <img src="/github-icon.png" className="contact-tile" />
              </div>
              <div className="contact-spacer">
              </div>
              <div className="contact-text">
                /nathanalexanderpage
              </div>
            </a>
          </div>
          <div className="contact-flex">
            <div className="contact-icon">
              <img src="/phone-icon.png" className="contact-tile" />
            </div>
            <div className="contact-spacer">
            </div>
            <div className="contact-text">
              (425) 829-2988
            </div>
          </div>
          <div className="contact-flex">
            <div className="contact-icon">
              <img src="/email-icon.png" className="contact-tile" />
            </div>
            <div className="contact-spacer">
            </div>
            <div className="contact-text">
              <div>
                nathanalexander
              </div>
              <div>
                page@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
