import React, {useState} from 'react';
import './App.css';
import Todo from './Todo';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(() => count + 1);
  };
  const addTodo = () => {
    setTodos(() => [...todos, "New Todo"]);
  };

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
