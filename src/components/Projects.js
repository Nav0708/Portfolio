// Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <h3>Academic Projects</h3>
      </div>
      <div className="card-body">
        <h5>Scalable Societal Simulation</h5>
        <p>Developed a scalable framework for running large-scale societal simulations on a cluster infrastructure, reducing computation time by 70%.</p>

        <h5>Quiz Application</h5>
        <p>Built a full-stack online quiz application using ExpressJS and MongoDB for data storage, with dynamic question rendering and scoring.</p>

        <h5>AI Pac-Man Project</h5>
        <p>Implemented AI techniques like state-space search and reinforcement learning for intelligent gameplay using Python.</p>
      </div>
    </div>
  );
};

export default Projects;
