import React from 'react'

export const TodoComputed = () => {
  return (
    <section className="p-4 flex justify-between bg-white rounded-b-md">
    <span className="text-gray-400 text-xs">5 items left</span>
    <button className="text-gray-400 text-xs">Clear Completed</button>
  </section>
  )
}
export default TodoComputed;