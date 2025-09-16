import React from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen';

// PUBLIC_INTERFACE
function App() {
  // Render SplashScreen as the initial view
  return (
    <div className="App font-poppins">
      <SplashScreen />
    </div>
  );
}

export default App;
