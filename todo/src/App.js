import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoForm } from './hooks/TodoForm'
import {reducer, initialState} from './reducers/Reducer'

function App() {
  return (
    <div className="App">
     <ToDoForm />
    </div>
  );
}

export default App;
