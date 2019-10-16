import React from 'react';
import './App.css';
import SphereComponent from './components/SphereComponent';
import ScreenARComponent from './components/ScreenARComponent';

function App() {
  return (
    <div>
      <ScreenARComponent></ScreenARComponent>
      <button class="ui btn-bottom">OPEN 360 IMAGE</button>
      {/* <SphereComponent></SphereComponent> */}
    </div>
  );
}

export default App;
