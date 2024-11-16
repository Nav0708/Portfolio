import React, { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      const scrollPosition = window.scrollY + window.innerHeight;

      cards.forEach(card => {
        const cardPosition = card.offsetTop + card.offsetHeight;

        if (scrollPosition > cardPosition) {
          card.classList.add('visible'); // Add the visible class to show the card
        }
      });
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">
        <h3>Education</h3>
      </div>
      <div className="card-body">
        <h5>Master’s in Computer Science</h5>
        <p>Seattle University, Sept 2023 - May 2024 (expected)</p>
        <h5>Bachelor of Engineering in Computer Science</h5>
        <p>Dr. Ambedkar Institute of Technology, India, Aug 2014 - July 2018</p>
      </div>
    </div>
  );
};

export default Education;
