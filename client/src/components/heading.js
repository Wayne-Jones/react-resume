import React, { useState, useEffect } from 'react';

function Heading() {
    
  const[name, setName] = useState("");
  const[subtitle, setSubtitle] = useState("");
  const[links, setLinks] = useState([]);

  useEffect(() => {
    getHeading()
  }, [])

  const getHeading = () => {
    fetch("http://localhost:4000/api/heading")
      .then(resp => resp.json())
      .then(data => {
        data.map((headingObj) =>{
            setName(headingObj.title);
            setSubtitle(headingObj.content.body);
            setLinks(headingObj.links);
        });
      });
  };
    return (
        <div>
            {name} {subtitle} {links}
        </div>
    )
}

export default Heading
