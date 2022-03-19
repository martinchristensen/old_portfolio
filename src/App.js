import React, {useEffect, useRef, useState} from "react";
import TodoList from "./todo_list";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import todo from "./todo";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function toggleTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)
  }

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
        return [...prevTodos, {id: generateUniqueID(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
      const newTodos = todos.filter(todo => !todo.complete)
      setTodos(newTodos)
  }

  return (
    <>
      <p></p>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type={"text"} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter( todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
