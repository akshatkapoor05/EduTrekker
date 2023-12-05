import React from "react";

import { useState } from "react";
import "./AboutUs.css";
import cap from "../img/cap.png";
import mentor from "../img/mentor.png";
import chat from "../img/chat.png";
import goal from "../img/goal.png";
import handshake from "../img/handshake.png";
import pen from "../img/pen.png";

const AboutUs = () => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div name="aboutUs">
        <p className="text">
          {isReadMore ? text.slice(0, 30) : text}
          <span onClick={toggleReadMore} className="read-or-hide">
            ... {isReadMore ? <span style={{ color: "blue", textDecoration: "underline" }}>read more</span> : <span style={{ color: "blue", textDecoration: "underline" }}>Show less</span>}
          </span>
        </p>
      </div>

    );
  };
  return (
    <div className="aboutus__parent">
      <div className="aboutus__info">
        <h1>About Us</h1>
        <div className="aboutus__services">
          <div className="aboutus__card">
            <img className="aboutus__img" src={cap} alt="" />
            <h4>Forward-Thinking Approach</h4>
            <p>
              <ReadMore>
                Our approach is not merely present-focused; it is a visionary
                voyage into the future. We cultivate pioneers, daring souls who
                transcend the ordinary and forge new frontiers of accomplishment.
              </ReadMore>
            </p>
          </div>
          <div className="aboutus__card">
            <img className="aboutus__img" src={pen} alt="" />
            <h4>Comprehensive Learning Resources</h4>
            <p>
              <ReadMore>
                Within our mentorship ecosystem, we provide a comprehensive
                repository of study materials, equipping mentees with essential
                resources to navigate their educational and career pathways
                effectively.
              </ReadMore>
            </p>
          </div>
          <div className="aboutus__card">
            <img className="aboutus__img" src={handshake} alt="" />
            <h4>Promising guidance</h4>
            <p>
              <ReadMore>
                In the realm of education and career development, our organization
                is dedicated to fostering excellence, knowledge attainment, and
                professional growth. Join us in charting a course toward a
                successful and fulfilling future.
              </ReadMore>
            </p>
          </div>
          <div className="aboutus__card">
            <img className="aboutus__img" src={goal} alt="" />
            <h4>Strategic Goal Orientation</h4>
            <p>
              <ReadMore>
                Our mentorship organization places a strong emphasis on strategic
                goal-setting and achievement. We are dedicated to helping
                individuals define, pursue, and attain their educational and
                career objectives with precision
              </ReadMore>
            </p>
          </div>
          <div className="aboutus__card">
            <img className="aboutus__img" src={mentor} alt="" />
            <h4>Esteemed Mentoring Panel</h4>
            <p>
              <ReadMore>
                Our mentorship program proudly features a cadre of accomplished
                mentors renowned within their respective fields. These seasoned
                professionals serve as invaluable guides, offering expert insight
                and mentorship.
              </ReadMore>
            </p>
          </div>
          <div className="aboutus__card">
            <img className="aboutus__img" src={chat} alt="" />
            <h4>Effective Communication for Guidance</h4>
            <p>
              <ReadMore>
                We prioritize effective communication as a cornerstone for
                delivering meaningful guidance. Open, clear, and purpose-driven
                communication channels are established to ensure mentees receive
                the guidance they need.
              </ReadMore>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
