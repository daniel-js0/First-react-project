import { useState,useEffect } from "react";


const Step = () => {
   const [Data, setData] = useState([]);

  useEffect(()=>{
    getData();
  },[])

   const getData = async() =>{
     const response = await fetch("http://localhost:8000/todos");
     const jsonData = await response.json();
     setData(jsonData);

   }
  
    return ( 
        <div className="text-center justify-center">
        <h1 className="mt-10 text-center font-bold text-2xl text-pink-700" >React Fetch Api</h1>
        <div className="grid grid-cols-3 ml-[20%]">
        {Data.map((values)=>{
            return(
                <>
               
             <h5 className=" h-32 w-[39%] bg-slate-400 mt-4 font-light text-gray-900 text-xl " >{values.task}
              <span><p>{values.id}</p></span></h5>
             

               
                 
                
                </>
            )
        })} </div>
      </div>
     );
}
 
export default Step;