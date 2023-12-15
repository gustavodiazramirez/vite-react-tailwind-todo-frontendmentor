import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoComputed from './components/TodoComputed'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { useState } from 'react'

const initialStateTodos = [
  { id: 1, title: 'Complete Online Js BlueeWeb Curse', completed: true },
  { id: 2, title: 'Go to Gym', completed: false },
  { id: 3, title: 'Pick up Groseries', completed: false },
  { id: 4, title: 'Complete Frontend Mentor', completed: false },
]

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos)

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const [filter, setFilter] = useState('all')

  const changeFilter = (filter) => setFilter(filter);

  const filtersTodo = () => {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter((todo) => !todo.completed)
      case 'completed':
        return todos.filter((todo) => todo.completed)

      default:
        return todos
    }
  }

  return (
    <div className=" bg-contain bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] bg-gray-300 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filtersTodo()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <footer className="text-center mt-10">
        Drag and drop to reorder list
      </footer>
    </div>
  )
}

export default App
