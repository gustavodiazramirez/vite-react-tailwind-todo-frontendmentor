import React from 'react'
import CrossIcon from './icons/cross-icon'
import IconCheck from './icons/check-icon'

// Update and Delete

export const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo

  return (
    <article className="transition-all duration-1000 flex py-4 gap-4 border-b border-b-gray-40">
      <button
        className={`${
          completed
            ? 'rounded-full border-2 h-5 w-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'
            : 'rounded-full border-2 h-5 w-5 flex-none'
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`${
          completed
            ? 'grow text-gray-600 text-xs line-through dark:text-gray-500'
            : 'grow text-gray-600 text-xs dark:text-gray-500'
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  )
}
export default TodoItem
