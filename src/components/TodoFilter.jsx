import React from 'react'

export const TodoFilter = ({ changeFilter, filter}) => {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4 font-semibold">
        <button className= {`${filter == 'all' ? " text-blue-500" : 'hover:text-blue-400 text-gray-500'}`} onClick={() => changeFilter('all')}>
          All
        </button>
        <button className={`${filter == 'active' ? " text-blue-500" : 'hover:text-blue-400 text-gray-500'}`} onClick={() => changeFilter('active')}>Active</button>
        <button className={`${filter == 'completed' ? " text-blue-500" : 'hover:text-blue-400 text-gray-500'}`} onClick={() => changeFilter('completed')}>Completed</button>
      </div>
    </section>
  )
}
export default TodoFilter
