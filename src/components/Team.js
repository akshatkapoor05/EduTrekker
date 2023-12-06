import React from "react";
import "./Team.css";
import mentor1 from "../img/mohit.jpeg";
import mentor2 from "../img/dwibesh.jpeg";
import mentor3 from "../img/op.jpg";

const Team = () => {
  return (
    <div className="team__parent">
      <div className="team__members">
        <h1>OUR TEAM</h1>

        <div className="team__profiles">
          <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>
              <h3>Mohit Gupta</h3>
              
              
            </p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>Confident educator, resilient problem solver,
              always eager to support and guide.
            </div>
          </div>
          <div className="team__cards">
            <img className="team__img" src={mentor2} alt="" />
            <p>
              <h3>Dwibesh Panigrahy </h3>
              
            </p>

            <div className="team__info">
              <h4>Dwibesh Panigrahy</h4>
              Courageous researcher, resilient leader, eager to mentor and
              inspire students.
            </div>
          </div>
          <div className="team__cards">
            <img className="team__img" src={mentor3} alt="" />
            <p>
              <h3>Om Prakash Lenka </h3>
              
            </p>

            <div className="team__info">
              <h4>Om Prakash Lenka</h4>
              Eager to help, confident educator, resilient and brave in academic
              pursuits.
            </div>
          </div>

          <div className="team__cards">
            <img className="team__img" src={mentor2} alt="" />
            <p>
              <h3>Dwibesh Panigrahy </h3>
              
            </p>

            <div className="team__info">
              <h4>Dwibesh Panigrahy</h4>
              Courageous researcher, resilient leader, eager to mentor and
              inspire students.
            </div>
          </div>

          <div className="team__cards">
            <img className="team__img" src={mentor2} alt="" />
            <p>
              <h3>Dwibesh Panigrahy </h3>
              
            </p>

            <div className="team__info">
              <h4>Dwibesh Panigrahy</h4>
              Courageous researcher, resilient leader, eager to mentor and
              inspire students.
            </div>
          </div>

          <div className="team__cards">
            <img className="team__img" src={mentor2} alt="" />
            <p>
              <h3>Dwibesh Panigrahy </h3>
             
            </p>

            <div className="team__info">
              <h4>Dwibesh Panigrahy</h4>
              Courageous researcher, resilient leader, eager to mentor and
              inspire students.
            </div>
          </div>

          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
