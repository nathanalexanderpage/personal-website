import React from 'react';

function Projects() {
  return (
    <div>
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
      </div>
      <hr />
      <div className="proj">
        <h3>
          Kero
        </h3>
        <p>
          A task management app for business to keep track of the status of all to-do items in a given time frame (as it relates to software development, a "sprint"). On the backend is a MongoDB database, with which the React.js frontend interacts using the Mongoose ORM.
        </p>
      </div>

      <hr />

      <div className="proj">
        <h3>
          Pokemon Party Planner
        </h3>
        <p>
          Nintendo's Pokemon franchise has an ultra-popular series of home and mobile games that have had followers young and old for over two decades. Some are content with a casual play style, but there is also a competitive scene wherein people a lot of strategy goes into the formation of a team -- a so-called "party" -- of six Pokemon.  When you haven't played through the games enough times to know what kind of Pokemon to use, or you want to make side-by-side comparisons of multiple possible party configurations, this app will drastically shorten the length of time you need to do so, while giving you all the data you need to make informed strategic decisions.
        </p>
      </div>

    </div>
  )
}

export default Projects;
