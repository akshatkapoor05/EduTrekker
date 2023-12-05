import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home__home_parent">
      <div className="home__welcome">
        <h1>EduTrekker</h1>
        <p>
          Welcome to EduTrekker, your trusted partner
          in the journey to academic excellence and success in competitive
          exams. We stand at the crossroads of aspiration and achievement,
          offering invaluable guidance and mentorship to aspiring students
          preparing for the prestigious JEE (Joint Entrance Examination), NEET
          (National Eligibility cum Entrance Test), and JEE Advanced. Our
          mission is clear: to empower the next generation of scientists,
          engineers, and medical professionals with the knowledge, skills, and
          strategic insights necessary to excel in these highly competitive
          {/* exams. With a team of seasoned mentors and a dedication to nurturing
          talent, we are your compass on the path to realizing your academic
          dreams. Join us, and let's embark on this transformative educational
          voyage together. */}
        </p>
        <button>Join us</button>
      </div>
    </div>
  );
};

export default Home;
