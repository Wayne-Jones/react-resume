import React, { useState, useEffect } from 'react';

function Heading() {
  const [heading, setHeading] = useState([]);

  const getHeading = () => {
    fetch('http://localhost:5000/api/heading')
      .then((resp) => resp.json())
      .then((data) => {
        const singleHeading = data.map((headingObj) => (
          <div key={headingObj._id}>
            <h1>{headingObj.title}</h1>
            <h3>{headingObj.content.body}</h3>
            <ul>
              {headingObj.links.map((link) => (
                <li>{link}</li>
              ))}
            </ul>
          </div>
        ));
        setHeading(singleHeading);
      });
  };

  useEffect(() => {
    getHeading();
  }, []);


  return (
    <>
      {heading}
    </>
  );
}

export default Heading;
