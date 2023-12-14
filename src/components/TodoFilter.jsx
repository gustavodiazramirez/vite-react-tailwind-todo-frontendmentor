import React from 'react'

export const TodoFilter = () => {
  return (
    <section className="container mx-auto px-4">
    <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4 font-semibold">
      <button className=" text-blue-500">All</button>
      <button className="hover:text-blue-500 text-gray-500">
        Active
      </button>
      <button className="hover:text-blue-500 text-gray-500">
        Completed
      </button>
    </div>
  </section>
  )
}
export default TodoFilter;