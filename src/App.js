import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={LoginPage} />
        <Route path='/' element={HomePage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
