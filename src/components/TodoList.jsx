import React from 'react'
import TodoItem from '../components/TodoItem'

export const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <div className="bg-white mt-8 rounded-t-md px-4 dark:bg-gray-800 transition-all duration-1000">
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        ))}
    </div>
  )
}
export default TodoList;