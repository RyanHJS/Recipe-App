import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';

import Form from './components/form/Form';
import Header from './components/layout/Header';
import List from './components/list/List';
import Notify from './components/notifications/Notify';



function App() {
  return (
    <div className="App">
      <Header />
      <Notify
        message="This is a test notification"
        backgroundColor={"bg-green-500"}
      />

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/recipes" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
