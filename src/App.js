import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (

    <div>
      <h1>Hello React Front End</h1>

      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
