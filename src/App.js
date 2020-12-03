import './App.css';
import React, { useEffect, useState } from 'react';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

function App() {
  let [currentColor, setCurrentColor] = useState(RED);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentColor(getNextColor(currentColor));
    }, 1000)
    return () => clearInterval(timer);
  })

  return (
    <div className="App">
      <TrafficLight currentColor={currentColor} />
    </div>
  );
}

function getNextColor(color) {
  switch (color) {
    case RED:
      return YELLOW;
    case YELLOW:
      return GREEN;
    default:
      return RED;
  }
}

export default App;
