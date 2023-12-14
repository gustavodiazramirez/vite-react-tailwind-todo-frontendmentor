import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  return (
    <div className=" bg-contain bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] bg-gray-300 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate />
        <div className="bg-white mt-8 rounded-t-md">
          <TodoList />
          <TodoList />
          <TodoList />
        </div>
        <TodoComputed />

        <TodoFilter />
      </main>

      <footer className="text-center mt-10">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
