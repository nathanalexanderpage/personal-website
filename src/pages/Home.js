import React from 'react';

function Home() {
  return (
    <div>
      <div className="sec first">
        <h2>
          <span className="flare">&#9788;</span> Welcome! <span className="flare">&#9788;</span>
        </h2>
        <div className="proj">
          <p>
            I am Nathan and you are someone I'd like to speak with. Please take a look around my site and use the 'Contact' section on the left if you feel we have some more to talk about. Thanks a bunch.
          </p>
        </div>

      </div>
      <div id="about" className="sec">
        <h2>
          <span className="flare">&#9788;</span> About Me <span className="flare">&#9788;</span>
        </h2>
        <div className="proj">
          <p>
            In case you came directly to this page: My name is Nathan. Hello.
          </p>
          <p>
            I'm a full-stack web developer whose passions within programming lie in modularity and scalability, among other things. I recently emerged victorious from a three-month Software Engineering Immersive bootcamp experience at General Assembly in Seattle, and am ready to take my experience and know-how from this into industry to produce something worthy of pride. My energy in the workplace comes from feeling that what I deliver will have a positive impact on my team and more largely the end users. See the areas in which I have skills listed below.
          </p>
        </div>

      </div>
      <div id="skills" className="sec">
        <h2>
          <span className="flare">&#9788;</span> Skills <span className="flare">&#9788;</span>
        </h2>
        <div className="proj">
          <p>
            In case you came directly to this page: My name is Nathan. Hello.
          </p>
          <p>
            I'm a full-stack web developer whose passions within programming lie in modularity and scalability, among other things. I recently emerged victorious from a three-month Software Engineering Immersive bootcamp experience at General Assembly in Seattle, and am ready to take my experience and know-how from this into industry to produce something worthy of pride. My energy in the workplace comes from feeling that what I deliver will have a positive impact on my team and more largely the end users. See the areas in which I have skills listed below.
          </p>
        </div>

      </div>
      <div id="projects" className="sec">
        <h2>
          <span className="flare">&#9788;</span> Projects <span className="flare">&#9788;</span>
        </h2>
        <div className="proj">
          <h3>
            Shappit
          </h3>
          <p>
            Oftentimes the way shipping organizations are set up makes the user use several different software simultaneously to get a single job complete. The idea behind my app is that shipping should be a one-stop shop, whether the user is an employee or customer of the shipping line. On the back end I set up a Django app acting as an API with a PostgreSQL database. The front end is an additional decoupled Django app that submits all data changes via said backend API, and displays returned data appropriately using Django's templating language, DTL.
          </p>
          <div>
            <a href="#">
              <div className="projlink projsite">
                Live site
              </div>
            </a>
            <a href="https://github.com/nathanalexanderpage/shappit-frontend">
              <div className="projlink projgithub">
                Github frontend repo
              </div>
            </a>
            <a href="https://github.com/nathanalexanderpage/shappit-backend">
              <div className="projlink projgithub">
                Github backend repo
              </div>
            </a>
          </div>
        </div>
        <hr />
        <div className="proj">
          <h3>
            Kero
          </h3>
          <p>
            A task management app for business to keep track of the status of all to-do items in a given time frame (as it relates to software development, a "sprint"). On the backend is a MongoDB database, with which the React.js frontend interacts using the Mongoose ORM.
          </p>
          <div>
            <a href="#">
              <div className="projlink projsite">
                Live site
              </div>
            </a>
            <a href="https://github.com/nathanalexanderpage/kero-client">
              <div className="projlink projgithub">
                Github frontend repo
              </div>
            </a>
            <a href="https://github.com/nathanalexanderpage/kero-server">
              <div className="projlink projgithub">
                Github backend repo
              </div>
            </a>
          </div>
        </div>

        <hr />

        <div className="proj">
          <h3>
            Pokemon Party Planner
          </h3>
          <p>
            Nintendo's Pokemon franchise has an ultra-popular series of home and mobile games that have had followers young and old for over two decades. Some are content with a casual play style, but there is also a competitive scene wherein a lot of strategy goes into the formation of a team -- a so-called "party" -- of six Pokemon.  When you haven't played through the games enough times to know what kind of Pokemon to use, or you want to make side-by-side comparisons of multiple possible party configurations, this app will drastically shorten the length of time you need to do so, while giving you all the data you need to make informed strategic decisions.
          </p>
          <div>
            <a href="#">
              <div className="projlink projsite">
                Live site
              </div>
            </a>
            <a href="https://github.com/nathanalexanderpage/pokemon-party-builder">
              <div className="projlink projgithub">
                Github repo
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;
