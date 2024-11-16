// Experience.js
import React from 'react';
import '../style/education.css';

const Experience = () => {
  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <h3>Professional Experience</h3>
      </div>
      <div className="card-body">
        <h5>Software Development Engineer, Lumen Technologies</h5>
        <p>Bengaluru, India | Nov 2020 - July 2022</p>
        <ul>
          <li>Developed key features for Workflow Management Web Application</li>
          <li>Reduced AJAX request processing time by 30% using Spring MVC and RESTful web services</li>
          <li>Collaborated with cross-functional teams to address issues and implement code fixes</li>
        </ul>

        <h5>Software Developer, Birlasoft</h5>
        <p>Chennai, India | Aug 2018 - Oct 2020</p>
        <ul>
          <li>Engineered features for an Enterprise FinTech application, improving document generation efficiency by 30%</li>
          <li>Optimized frontend with React.js, reducing rendering time from 5s to 1s</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
