import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";



const TodoList = ({ todos, setTodo, darkMode4 }) => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('all');
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [activeTasksCount, setActiveTasksCount] = useState(0);
  const [totalTasksCount , setTotalTasksCount ] = useState(0);
  const [activeView, setActiveView] = useState('active');
  const [ptag, setpTag ] = useState('No items Found:');


        //  use effect to the total todos 
         useEffect(() => {
          setTotalTasksCount(activeTasksCount + completedTasksCount);
          }, [activeTasksCount, completedTasksCount]);

        //  use effect to count the todos in the tab below 
          useEffect(()=> {
            const completedCount = todos.filter((todo) => todo.completed).length;
              const activeCount = todos.length - completedCount;

              setCompletedTasksCount(completedCount);
              setActiveTasksCount(activeCount);
          },[todos]);

          //  function to navigate through tabs all, active and completed 
            const handleTabClick = (tab) => {
              setActiveTab(tab);
             if (tab === 'comp') {
                setpTag('No completed tasks found:');

              } else if (tab === 'all' || tab === 'active' ){
                setpTag('No items Found:');
              }
            };

            const handlesetView = (tab) => {
              setActiveView(tab);    
           };


            //  function to toggle each todo to affect the todo text 
            function toggleTodo(id, completed) {
              setTodo(currentTodos => {
                const updatedTodos = currentTodos.map(todo => {
                  if (todo.id === id) {
                    // Send a request to update the completed status on the server
                    fetch(`http://localhost:8000/todos/${id}`, {
                      method: 'PATCH', // Use PATCH or PUT here, depending on your API
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ completed: completed })
                    })
                      .then(response => response.json())
                      .catch(error => {
                        console.error("Error updating todo:", error);
                      });
            
                    // Return the updated todo with the completed status
                    return { ...todo, completed };
                  }
                  return todo;
                });
            
                return updatedTodos;
                });
            }
            
          //  function to delete todo   
            function deleteTodo(id) {
              setTodo(currentTodos => {
                return currentTodos.filter(todo => todo.id !== id);
              });
            
              fetch(`http://localhost:8000/todos/${id}`, {
                method: 'DELETE'
              })
                .then(() => {
                  history.push('/todo');
                })
                
            }

          //  function to delete completed todo at once 
            const handleDeleteComp = () => {
                const completedTodos = todos.filter((todo) => todo.completed);
                  completedTodos.forEach((completedTodo) => {
                    fetch(`http://localhost:8000/todos/${completedTodo.id}`, {
                      method: 'DELETE',
                    })
                      .then((response) => {
                        if (response.ok) {
                          setTodo((currentTodos) =>
                            currentTodos.filter((todo) => todo.id !== completedTodo.id)
                          );
                        } else {
                          console.error('Failed to delete todo:', completedTodo.id);
                        }
                      })
                      .catch((error) => {
                        console.error('Error:', error);
                      });
                  });
            };

   return ( 
    <div>
          {/* mapping through the new todos  */}
        <h1 className="text-center mt-9 mb-4 text-3xl font-semibold">All Todos!</h1>
           {todos.map(todo => {
              const shouldDisplay =
      
              activeView === 'all' ||  (activeView === 'active' && !todo.completed) ||  
               
                   (activeView === 'completed' && todo.completed);

              if (!shouldDisplay){
                return null;
              }
           
           return (<div
                className={`flex md:ml-[37%] ml-[5%] h-14 w-[90%] md:w-[25%] relative rounded-md mt-1 ${darkMode4 ? 'bg-zinc-950  bg-opacity-70' : 'bg-white bg-opacity-80' }`}
                key={todo.id}>           
                <label>
                  <input type="checkbox" 
                  className='h-6 w-6 ml-5 mt-3'
                  name="" 
                  checked={todo.completed} 
                  onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                  {todo.title}
                </label>

                  <h2 className={`ml-2 mt-3 text-lg font-semibold ${todo.completed && 'line-through text-gray-300'} ${darkMode4 && todo.completed ? 'text-gray-800' : ''}`} >{ todo.task }</h2>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                  onClick={() => deleteTodo(todo.id)}  
                  className="w-10 h-8 end-0 absolute text-red-600 mt-2 mr-2" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
              </div>);  
           })}

          {/* display tab if total todo is zero  */}
           {totalTasksCount === 0 &&  (
                <div class={`h-32 w-[90%] ml-[5%] bg-white bg-opacity-70 flex flex-col mt-4 rounded-xl shadow-xl md:w-[37%] md:ml-[31%] ${darkMode4 ? 'bg-zinc-950' :'bg-gray-100'}`}>
                    <svg class="ml-[45%] w-6 h-6   mt-4 text-sky-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg> 
                    <p id="comp" class="text-center mt-2 max-[360px]:text-lg  text-xl font-semibold tracking-wide leading-6 md:text-xl md:tracking-normal  ">{ ptag }</p>
                    <p id="comp2" class="text-center mt-2 font-semibold text-gray-400   md:tracking-tight ">So bad... You need to get back to work!</p>
                </div>
            )}
    
          {/* tab counter at lower screen media query  */}
           <div  class={`h-12 w-[90%] md:ml-[31%] md:w-[37%] ml-[5%] xl:hidden flex justify-around gap-9 bg-grey-100 border-t border-t-gray-500 border-grey-100 py-2.5 mt-5 rounded-b-md shadow-xl bg-white bg-opacity-30 rounded-lg ${darkMode4 ? 'bg-zinc-950' :'bg-gray-100'}`}>
                      <div>
                      {totalTasksCount === 0 ? (<p className='xl:ml-1 min-[60px]'>No Tasks at all</p>) : 
                            (activeTasksCount >= 1 && <p className="min-[60px]" >{activeTasksCount} items left</p>
                       )}</div>
                       <p id="clear1" class="text-sm ">Clear Completed</p>
            </div>

          {/* tab counter at large screen media query  */}
            <div class={`h-16 w-[90%] ml-[5%] md:ml-[31%] md:w-[37%] xl:text-sm  text-lg flex justify-around gap-3  py-4 md:py-6 mt-4 shadow-xl font-semibold bg-opacity-80 rounded-lg ${darkMode4 ? 'bg-zinc-950' :'bg-gray-100'}`}>
                      <div>
                          {totalTasksCount === 0 ? (
                            <p className='xl:ml-1 min-[60px] hidden xl:flex'>No Tasks at all</p>
                          ) : (
                            activeTasksCount >= 1 && <p className="min-[60px] hidden xl:flex" >{activeTasksCount} items left</p>
                          )}
                        </div>

                          <button
                          onClick={() => {handleTabClick('all'); handlesetView('all'); }}
                            class={`ml-20  xl:ml-10 cursor-pointer ${activeTab === 'all' ? 'text-sky-500':''}`}>All</button>

                          <buttton 
                          onClick={() => {handleTabClick('active'); handlesetView('active'); }} 
                          class={`cursor-pointer ${activeTab === 'active' ? 'text-sky-500': ''}`}>Active </buttton>

                          <button
                          onClick={() =>{ handleTabClick('comp'); handlesetView('completed');}}
                          class={`mr-20 xl:mr-10 cursor-pointer ${activeTab === 'comp' ? 'text-sky-500': ''}`}>Completed</button>

                          <button 
                          onClick={handleDeleteComp}
                          class="xl:mr-1 min-[60px]:hidden xl:flex cursor-pointer" >Clear Completed</button>
            </div>

          <p id="chan" class="text-center text-xs  cursor-pointer mt-5">Challenge by Frontend Mentor. Coded by Daniel-js0.</p>
    </div>

     );
}
 
export default TodoList;