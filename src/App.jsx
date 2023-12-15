import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoComputed from './components/TodoComputed'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { useState } from 'react'

const initialStateTodos = [
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
    <div className="transition-all duration-1000 bg-contain bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-gray-300 min-h-screen dark:bg-gray-950">
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

      <footer className="transition-all duration-1000 text-center mt-10 dark:text-gray-500">
        Created by Gustavo Díaz
      </footer>
    </div>
  )
}

export default App
