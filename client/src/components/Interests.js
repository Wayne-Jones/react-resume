import React, { useState, useEffect } from 'react';

function Interests() {
  const [interests, setInterests] = useState([]);

  const getInterests = () => {
    fetch('http://localhost:5000/api/interests')
      .then((resp) => resp.json())
      .then((data) => {
        const singleInterest = data.map((interestObj) => (
          <div key={interestObj._id}>
            <ul>
              {interestObj.content.bullet.map((interest) => (
                <li>{interest}</li>
              ))}
            </ul>
          </div>
        ));
        setInterests(singleInterest);
      });
  };

  useEffect(() => {
    getInterests();
  }, []);

  return (
    <>
      {interests}
    </>
  );
}

export default Interests;
