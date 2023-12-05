import React from "react";
import "./Courses.css";
import adv from '../img/adv.png'
import nta from '../img/nta.png'
import neet from '../img/neet.png'
import cbse from '../img/CBSE.png'

const Courses = () => {
  const handleClick = () => {
    window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfJr0PDkIKlsHNt_Xx5kyiRQB1aiGl0g-t2CoFDSS6PcH3g1Q/viewform?vc=0&c=0&w=1&flr=0';
  };
  return (

    <div className="courses__parent">
      <div className="courses__courses">
        <h1>Courses</h1>
        <div className="courses__description">
        <div className="courses__cards">
          <h2>JEE MAINS+ADVANCE</h2>
            <h3>3 Months - 749.00/-<s>899.00/-</s></h3>
            <h3>6 Months - 1199.00/-<s>1799.00/-</s></h3>
          
            <img className="courses__img" src={adv} alt="" />
            <p>
            For those aiming to ace both JEE Main and Advance, our mentorship program offers specialized training. Our mentors guide students through the complexities of both exams, focusing on a rigorous curriculum and problem-solving skills.
            </p>
            <button onClick={handleClick}>Enroll</button>
          </div>
          <div className="courses__cards">
          <h2>NEET</h2>
            <h3>3 Months - 749.00/-<s>899.00/-</s></h3>
            <h3>6 Months - 1199.00/-<s>1799.00/-</s></h3>
          
            <img className="courses__img" src={neet} alt="" />
            <p>
            Our NEET mentorship program is tailored to help aspiring medical students excel. Our expert mentors provide comprehensive guidance, study materials, and practice exams to ensure students are well-prepared for this competitive examination.
            </p>
            <button onClick={handleClick}>Enroll</button>
          </div>
          <div className="courses__cards">
          <h2>JEE MAINS</h2>
            <h3>3 Months - 599.00/-<s>799.00/-</s></h3>
            <h3>6 Months - 999.00/-<s>1599.00/-</s></h3>
          
            <img className="courses__img" src={nta} alt="" />
            <p>
            Our JEE MAINS mentorship course equips students with the knowledge and strategies needed to succeed in the Joint Entrance Examination (JEE) Main. Through personalized coaching and extensive resources, we empower students to achieve their best scores.
            </p>
            <button onClick={handleClick}>Enroll</button>
          </div>
         

          <div className="courses__cards">
          <h2>CBSE</h2>
            <h3>3 Months - 499.00/-<s>599.00/-</s></h3>
            <h3>6 Months - 899.00/-<s>1199.00/-</s></h3>
          
            <img className="courses__img" src={cbse} alt="" />
            <p>
            Our CBSE mentorship program ensures students excel in their CBSE board exams. With a focus on exam techniques, and continuous assessment, we help students achieve top-tier results in their Central Board of Secondary Education examinations.
            </p>
            <button onClick={handleClick}>Enroll</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Courses;
