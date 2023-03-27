import React from 'react';
import './App.css';
import Timer from './components/Timer';
import SoundOptions from './components/SoundOptions';
import ReminderOptions from './components/ReminderOptions';
import Settings from './components/Settings';

function App() {
  return (
    <div className='App'>
      <Timer />
      <SoundOptions />
      <ReminderOptions />
      <Settings />
    </div>
  );
}

export default App;