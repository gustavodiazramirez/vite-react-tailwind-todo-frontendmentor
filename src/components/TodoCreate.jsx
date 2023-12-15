import React, { useState } from 'react'

export const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState('');

  const handleSubmitAddTodo = (evento) => {
    evento.preventDefault();
    if (!title.trim()) {
      setTitle('');  
      }
      createTodo(title);
      setTitle('');
  }



  return (
    <form 
    onSubmit={handleSubmitAddTodo} 
    className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center dark:bg-gray-800 transition-all duration-1000 ">
    <span className="rounded-full border-2 inline-block h-4 w-4 "></span>
    <input
      type="text"
      placeholder="Create a new todo..."
      className="transition-all duration-1000 w-full text-gray-400 outline-none text-xs dark:bg-gray-800"
      value={title}
      onChange={(evento) => setTitle(evento.target.value)}
    />
  </form>
  )
}
export default TodoCreate;