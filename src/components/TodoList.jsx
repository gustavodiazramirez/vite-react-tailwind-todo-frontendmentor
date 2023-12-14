import React from 'react'
import CrossIcon from "../components/icons/cross-icon";

// Update and Delete

export const TodoList = () => {
  return (
    <article className="flex py-4 gap-4 border-b border-b-gray-400  px-4">
      <button className="rounded-full border-2 inline-block h-5 w-5 "></button>
      <p className="grow first-letter:text-gray-600 text-xs">
        Complete online Javascript curse in Bluuweb
      </p>
      <button>
        <CrossIcon />
      </button>
    </article>
  )
}
export default TodoList;