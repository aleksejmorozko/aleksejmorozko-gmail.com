import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
    const todos =[
        {id: 1, completed: false, title: 'Buy bread'},
        {id: 2, completed: false, title: 'Buy shugar'},
        {id: 3, completed: false, title: 'Buy milk'}
    ]

  function toggleTodo(id){
    console.log(id)
  } 

  return (
    <div className='wrapper'>
        <h1>React Tutorial</h1>
        <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
} 
export default App;
