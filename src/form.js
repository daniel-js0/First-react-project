import { useState, useEffect } from 'react';



const Form = ({ darkMode1 }) => {

    const [Name, setName  ]= useState("");
    const [Email, setEmail ] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(null);
    const [isError, setIsError] = useState(false);
  
  
  useEffect(()=>{
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
      }, 1000); 
  
      return () => {
        clearTimeout(timer); // Clear the timer if the component unmounts or isError becomes false
      };
    }
  
    if (isSubmitted) {
      const clearDetails = setTimeout(() => {
        setIsSubmitted(null);
      }, 5000); 
  
      return () => {
        clearTimeout(clearDetails); // Clear the timer if the component unmounts or isError becomes false
      };
    }
  
  },[isError,isSubmitted ])
  
    
   
  // -------------------------------------------------------------------------
  function handleSubmit(e){
    e.preventDefault()   
  
     console.log({
       Name, Email
     })
    
     const text = Name.trim();
  
     const numText = text.length;
     console.log('number of name character is', numText);
  
     const word = Name.split(/\s+/);
  
      const numWord = word.length;
      console.log('the number of words in name is', numWord);
      
     
     const uppercase = Name.toUpperCase();
     console.log('uppercase text ' + uppercase);
  
     const lowercase = Name.toLowerCase();
      console.log('Lowercase text ' + lowercase);
  
      const textRevs = Name.split('').reverse().join('');
      console.log('The nameinput reversed is ' + textRevs);
  
     if (Name === "" || Email === "") {
      setIsError(true);
      setIsSubmitted(null); // Reset submitted data if there's an error
    } else {
      setIsError(false);
      setIsSubmitted({ Name, Email });
    }
  
    setEmail("");
    setName("");
       
  }

return(


<form  onSubmit={handleSubmit}  className="">
 
  <div className={`flex flex-col h-screen rounded-md  mx-auto mt- w-screen backdrop-blur-md ${darkMode1 ? 'text-white': 'text-black'}`} >
 
  
  <h2 className='text-center text-lg md:text-3xl font-light mt-3'>Submit Form here</h2>

      {isError &&     
      (<div className=' text-rose-600 flex justify-center mt-3 font-semibold' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
          <p className='ml-1 italic'>Please Enter your details</p>
       </div>)}


  <label className='ml-[10%] md:ml-[33%] mt-5 text-xl font-light'>Email </label>
    <input type="email"
        value={Name}
        onChange={e => setName(e.target.value)}
        className={`px-2 w-[80%] md:w-[34%] h-10 mx-auto mt-4 rounded-lg border  opacity-50 border-dashed border-emerald-500 ${darkMode1 && 'bg-gray-600 ' }`}
        id='text'/>

  <label className=' ml-[10%] md:ml-[33%] mt-3 text-xl  font-light ' >Password</label>
    <input type="password" 
        value={Email}
        onChange={e => setEmail(e.target.value)}
        className={`px-2 w-[80%] md:w-[34%] h-10 mx-auto mt-4 rounded-lg border opacity-50 border-dashed border-emerald-500 ${darkMode1 && 'bg-gray-600 ' }`}
        id='email'/>

  <button type='submit' className={`button bg-blue-500 mb-5 w-[30%] md:w-[15%] mx-auto text-lg font-light hover:bg-blue-400 ${darkMode1 && 'bg-green-500'}`} >Login</button>

      {isSubmitted && (
      <div className={`h-32 rounded-md text-center text-lg px-1 w-[65%] md:w-[25%] font-semibold opacity-70 bg-slate-200 italic flex flex-col mx-auto ${darkMode1 && 'bg-gray-900'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="w-9 mt-2 h-9 font-extrabold mx-auto text-sky-600">         <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
          <p>Name: {isSubmitted.Name}</p>
          <p>Email: {isSubmitted.Email}</p>
      </div>)}


  </div> 

</form>
   

    );
}
export default Form;