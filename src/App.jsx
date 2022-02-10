import React from 'react';
import StartScreen from './components/sections/startScreen/StartScreen';
import TimeLine from './components/sections/timeLineScreen/TimeLine';
import AboutMe from './components/sections/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <StartScreen />
      <TimeLine />
      <AboutMe />
    </div>
  );
}

export default App;
