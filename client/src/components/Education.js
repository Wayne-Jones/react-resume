import React, { useState, useEffect } from 'react';

function Education() {
  const [education, setEducation] = useState([]);

  const getEducation = () => {
    fetch('http://localhost:5000/api/education')
      .then((resp) => resp.json())
      .then((data) => {
        const singleEducation = data.map((educationObj) => (
          <div key={educationObj._id}>
            <h3>{educationObj.title}</h3>
            <span>{educationObj.place}</span>
            <span>{educationObj.date}</span>
          </div>
        ));
        setEducation((educationArray) => [...educationArray, singleEducation]);
      });
  };

  useEffect(() => {
    getEducation();
  }, []);

  return (
    <>
      {education}
    </>
  );
}

export default Education;
