import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from '../../pages/home/Home';
import Programs from '../../pages/programs/Programs';
import Error404 from '../../pages/Error404/Error404';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/programs' element={<Programs />}/>
          <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
