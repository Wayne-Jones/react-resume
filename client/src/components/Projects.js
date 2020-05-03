import React, { useState, useEffect } from 'react';

function Projects() {
  const [project, setProject] = useState([]);

  const getProjects = () => {
    fetch('http://localhost:5000/api/project')
      .then((resp) => resp.json())
      .then((data) => {
        const singleProject = data.map((projectObj) => (
          <div key={projectObj._id}>
            <h3>{projectObj.title}</h3>
            <span>
              {projectObj.place}
            </span>
            <p>{projectObj.content.body}</p>
          </div>
        ));
        setProject((projectArray) => [...projectArray, singleProject]);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {project}
    </>
  );
}

export default Projects;
