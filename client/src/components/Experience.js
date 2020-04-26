import React, { useState, useEffect } from 'react';

function Experience() {
  const [experience, setExperience] = useState([]);

  const getExperience = () => {
    fetch('http://localhost:5000/api/experience')
      .then((resp) => resp.json())
      .then((data) => {
        const singleExperience = data.map((experienceObj) => (
          <div key={experienceObj._id}>
            <h3>{experienceObj.title}</h3>
            <span>
              {experienceObj.place}
              |
              {experienceObj.date}
            </span>
            <p>{experienceObj.content.body}</p>
            <ul>
              {experienceObj.content.bullet.map((lineItem) => (
                <li>{lineItem}</li>
              ))}
            </ul>
          </div>
        ));
        setExperience((experienceArray) => [...experienceArray, singleExperience]);
      });
  };

  useEffect(() => {
    getExperience();
  }, []);

  return (
    <>
      {experience}
    </>
  );
}

export default Experience;
