import React from 'react'

export const TodoCreate = () => {
  return (
    <form className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center">
    <span className="rounded-full border-2 inline-block h-4 w-4 "></span>
    <input
      type="text"
      placeholder="Create a new todo..."
      className="w-full text-gray-400 outline-none text-xs"
    />
  </form>
  )
}
export default TodoCreate;