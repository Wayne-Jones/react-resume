import React, { useState, useEffect } from 'react';

function Summary() {
  const [summary, setSummary] = useState([]);

  const getSummary = () => {
    fetch('http://localhost:5000/api/summary')
      .then((resp) => resp.json())
      .then((data) => {
        const singleSummary = data.map((summaryObj) => (
          <div key={summaryObj._id}>
            <p>{summaryObj.content.body}</p>
          </div>
        ));
        setSummary(singleSummary);
      });
  };

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <>
      {summary}
    </>
  );
}

export default Summary;
