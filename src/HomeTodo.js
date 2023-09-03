import TodoList from "./Todolist";
import useFetch from "./useFetch";




const HomeTodo = ({ darkMode4 }) => {
  const { data: todos, setData: setTodo, loadPending, error } = useFetch('http://localhost:8000/todos')
 
    return (
        <div className={`text-center mt-5`}>
      {error && <div className="">{ error }</div> }
      {loadPending &&
        <div> 
          <div className="w-10 h-10 relative ml-[43%]  md:ml-[48%] mt-7 animate-spin">
          <div className="w-full h-full border-4 border-gray-100 border-t-gray-500 rounded-full absolute">
          </div>
          </div>
        </div>}
      {todos && <TodoList todos={todos} setTodo={setTodo}  darkMode4={darkMode4} />}
    </div>
  

       
    );
}
 
export default HomeTodo;