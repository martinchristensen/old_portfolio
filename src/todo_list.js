import React from 'react';
import Todo from "./todo";

const TodoList = ({todos, toggleTodo}) => {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    );
};

export default TodoList;