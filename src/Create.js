import { useState } from "react";
import { useHistory } from 'react-router-dom';


const Create = ({ darkMode4 }) => {
    
    const [task, setTask] = useState('');
    const [isPending, setIsPending] = useState(false);
    const historytodo = useHistory();
    
    const handleSubmit = (e) => {
       e.preventDefault();
       const todo = { task };

       setIsPending(true);
       

       fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
       }).then(()=>{
            setIsPending(false);
            historytodo.push('/todo');
       })

       setTask('');
       
    }

    return ( 
     <div className=" mt-10 flex flex-col" >
           <h2 className="text-center text-2xl font-light " >Add new Todo</h2>

     <form onSubmit={handleSubmit} className="flex flex-col" >
            <label className="ml-[10%] md:ml-[35%] mt-5 text-xl font-light">New Todo:</label>
            <input type="text" 
            className={`px-2 w-[80%] md:w-[30%] h-10 mx-auto mt-4 rounded-lg border  opacity-50 border-dashed border-emerald-500 ${darkMode4 ? 'bg-slate-500' : 'bg-white'}`} 
            required 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            {!isPending && <button className="bg-green-500 text-white px-4 py-2 mt-5 mx-auto rounded-md
              w-[30%] text-center md:w-[10%] text-lg font-light hover:bg-green-300" >Add Todo</button>}
            {isPending && <button disabled className="bg-red-500 text-white px-4 py-2 mt-5 mx-auto rounded-md
              w-[30%] text-center md:w-[14%] text-lg font-light hover:bg-red-300" >Adding Todo...</button>}
     </form>

     </div>
     );
}
 
export default Create;