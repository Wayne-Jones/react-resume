import React, { useState, useEffect } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);

  const getSkills = () => {
    fetch('http://localhost:5000/api/skills')
      .then((resp) => resp.json())
      .then((data) => {
        const singleSkill = data.map((skillObj) => (
          <div key={skillObj._id}>
            <h3>{skillObj.title}</h3>
            <ul>
              {skillObj.content.bullet.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        ));
        setSkills((skillsArray) => [...skillsArray, singleSkill]);
      });
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      {skills}
    </>
  );
}

export default Skills;
