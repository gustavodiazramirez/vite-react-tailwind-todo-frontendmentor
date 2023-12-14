import CrossIcon from "./components/icons/cross-icon";
import MoonIcon from './components/icons/moon-icon'

const App = () => {
  return (
    <>
      <div
        className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
      bg-contain bg-no-repeat bg-gray-300 min-h-screen"
      >
        <header className="container mx-auto px-4 pt-8">
          <div className="flex justify-between mb-8">
            <h1 className="uppercase text-white text-3xl tracking-[10px] font-bold">
              todo
            </h1>
            <button>
              <MoonIcon className='fill-wihte-400' />
            </button>
          </div>
          <form className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center">
            <span className="rounded-full border-2 inline-block h-4 w-4 "></span>
            <input
              type="text"
              placeholder="Create a new todo..."
              className="w-full text-gray-400 outline-none text-xs"
            />
          </form>
        </header>

        <main className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-md">
            <article className="flex py-4 gap-4 border-b border-b-gray-400  px-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 "></button>
              <p className="grow first-letter:text-gray-600 text-xs">Complete online Javascript curse in Bluuweb</p>
              <button>
                <CrossIcon />
              </button>
            </article>

            <article className="flex py-4 gap-4 border-b border-b-gray-400  px-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 "></button>
              <p className="grow first-letter:text-gray-600 text-xs">Complete online Javascript curse in Bluuweb</p>
              <button>
                <CrossIcon />
              </button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-400 p-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 "></button>
              <p className="grow first-letter:text-gray-600 text-xs">Complete online Javascript curse in Bluuweb</p>
              <button>
                <CrossIcon />
              </button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-400 p-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 "></button>
              <p className="grow first-letter:text-gray-600 text-xs">Complete online Javascript curse in Bluuweb</p>
              <button>
                <CrossIcon />
              </button>
            </article>
            <section className="p-4 flex justify-between">
              <span className="text-gray-400 text-xs">5 items left</span>
              <button className="text-gray-400 text-xs">Clear Completed</button>
            </section>
          </div>
        </main>

        <section className="container mx-auto px-4">
          <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4 font-semibold">
          <button className=" text-blue-500">All</button>
          <button className="hover:text-blue-500 text-gray-500">Active</button>
          <button className="hover:text-blue-500 text-gray-500">Completed</button>
          </div>
        </section>

        <section className="text-center mt-10">Drag and drop to reorder list</section>
      </div>
    </>
  );
};
export default App;
