import './App.css';
import AddTodo from './Components/AddTodo';
import TodosList from './Components/TodosList';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  let [state, changeState] = useState('ALL');
  function changeFilter(filter) {
    changeState(filter);
  }                                      
  return (
    <div className='body'>
      <h1>Todo list</h1>
      <AddTodo /> <br/>
      <TodosList  stateFilter={state}/> <br/>
      <Footer changeVisible = {changeFilter}/>
    </div>
  )
}
export default App;
