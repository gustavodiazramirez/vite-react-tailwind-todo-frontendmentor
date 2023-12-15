import React from 'react'

export const TodoFilter = ({ changeFilter, filter}) => {
  return (
    <section className="transition-all duration-1000 container mx-auto mt-8 dark:bg-gray-800">
      <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4 font-semibold dark:bg-gray-800 transition-all duration-1000 ">
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
