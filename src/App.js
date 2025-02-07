import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    }).catch(error => {
      console.error("Error:", error); // Check this error message!
    });
  }, []);


  return (
      <div>
        <p>The current time is {currentTime}.</p>
      </div>
  );
}

export default App;
