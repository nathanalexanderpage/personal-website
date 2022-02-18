import React from 'react';

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
        <ul className="navlist no-select">
          <a href="#top">
            <li className="navitem">
              Top
            </li>
          </a>
          <a href="#about">
            <li className="navitem">
              About
            </li>
          </a>
          <a href="#skills">
            <li className="navitem">
              Skills
            </li>
          </a>
          <a href="#projects">
            <li className="navitem">
              Projects
            </li>
          </a>
          <a href={process.env.PUBLIC_URL + '/NathanAlexanderPage_Resume.pdf'}>
            <li className="navitem">
              Resume
            </li>
          </a>
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
              Contact
            </h4>
          </div>
          <div className="links-grid">
            <div className="links-icon1">
              <a href="https://www.linkedin.com/in/nathanalexanderpage/">
                <img src="/linkedin-icon.png" alt="LinkedIn logo" className="contact-tile no-select" />
              </a>
            </div>
            <div className="links-text1">
              <div className="contact-text">
                <div>
                  <a href="https://www.linkedin.com/in/nathanalexanderpage/" className="white-link no-select">
                    /nathan
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/nathanalexanderpage/" className="white-link no-select">
                    alexander
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/nathanalexanderpage/" className="white-link no-select">
                    page
                  </a>
                </div>
              </div>
            </div>
            <div className="links-icon2">
              <a href="https://github.com/nathanalexanderpage">
                <img src="/github-icon.png" alt="GitHub logo" className="contact-tile no-select" />
              </a>
            </div>
            <div className="links-text2">
              <div className="contact-text">
                <div>
                  <a href="https://github.com/nathanalexanderpage" className="white-link no-select">
                    /nathan
                  </a>
                </div>
                <div>
                  <a href="https://github.com/nathanalexanderpage" className="white-link no-select">
                    alexander
                  </a>
                </div>
                <div>
                  <a href="https://github.com/nathanalexanderpage" className="white-link no-select">
                    page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
