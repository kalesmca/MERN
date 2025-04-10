import logo from './logo.svg';
import './App.css';
import React,{useContext, useState, useEffect, createContext} from 'react';
import StudentList from './components/studentList';
import Registration from './components/registration';

function App() {
  const StudentContext = createContext();
  return (
    <div className="App">
      <StudentContext.Provider value={{}}>
      <div>
      <div className='registration'>  
        <Registration />
      </div>
      <div className='studentList'>  
        <StudentList />
      </div>

      </div>
      </StudentContext.Provider>
      
      
    </div>
  );
}

export default App;
