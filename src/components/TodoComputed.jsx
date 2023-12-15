import React from 'react'

export const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
  return (
    <section className="p-4 flex justify-between bg-white rounded-b-md">
    <span className="text-gray-400 text-xs"> {computedItemsLeft} items left</span>
    <button className="text-gray-400 text-xs" onClick={clearCompleted}>Clear Completed</button>
  </section>
  )
}
export default TodoComputed;