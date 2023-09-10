import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';




const Form = ({ darkMode1, Name, setName }) => {

    const [Email, setEmail ] = useState("");
    const [value, setValue] = useState()
    const [isSubmitted, setIsSubmitted] = useState(null);
    const [isError, setIsError] = useState(false);
    const historytodo = useHistory();

  
  
  useEffect(()=>{
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
      }, 5000); 
  
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
    e.preventDefault();   
  
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
      historytodo.push('/form2');

    }
  
    setEmail("");
   
       
  }

return(
 
      <form  onSubmit={handleSubmit}  className="">
        <div className={`flex flex-col  backdrop-blur-md ${darkMode1 ? 'text-gray-100': 'text-gray-700'}`} >
        <h1 className={` pt-7 md:ml-0 ml-10 pb-4 tracking-wide text-3xl font-bold ${darkMode1 ? 'text-gray-100': 'text-gray-900'} `}>Personal info</h1>
              <p className="tracking-wide md:ml-0 ml-10   pb-4">
                  Please provide your name, email address, and phone number.
              </p>

            {isError &&     
            (<div className=' text-rose-600 flex justify-center mt-1 font-semibold' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                <p className='ml-1 italic'>Please Enter your details</p>
            </div>)}

            <div className='flex'>
            <label className=' mt-4 text-xl md:ml-0 ml-10 font-light'>Name <span className='text-red-600 ml-0.5'>*</span></label>
            {isError && (<p  className=" md:ml-[64%] ml-[35%] text-red-500 italic text-xs mt-7">Cannot leave Empty</p>)}
            </div>
          <input type="text"
              value={Name}
              onChange={e => setName(e.target.value)}
              className={`px-2 md:mx-0 mx-auto w-[80%] bg-white  md:w-full h-10 mt-1 rounded-lg border    ${isError ? 'border-red-600 border-solid' : 'border-solid border-gray-500'}`}
              id='text'/>

            <div className='flex'>
            <label className='mt-4 text-xl md:ml-0 ml-10 font-light'>Email <span className='text-red-600 ml-0.5'>*</span></label>
            {isError && (<p  className=" md:ml-[65%] ml-[35%] text-red-500 italic text-xs mt-7">Cannot leave Empty</p>)}
            </div>
          <input type="email"
              value={Email}
              onChange={e => setEmail(e.target.value)}
              className={`px-2 w-[80%] md:mx-0 mx-auto md:w-full h-10 mt-1 rounded-lg border  bg-white   ${isError ? 'border-red-600 border-solid' : 'border-solid border-gray-500'}`}
              id='text'/>
            <div>
            <div className='flex'>
            <label className=' mt-5 text-xl md:ml-0 ml-10 font-light'>Phone number <span className='text-red-600 ml-0.5'>*</span></label>
            {isError && (<p  className=" md:ml-[48%] ml-[14%] text-red-500 italic text-xs mt-7">Cannot leave Empty</p>)}
            </div>
         
          <PhoneInput type="phone" 
              value={value}
              onChange={setValue}
              className={` px-2 w-[80%] md:mx-0 mx-auto md:w-full h-10  mt-1 rounded-lg text-gray-700 border bg-white ${isError ? 'border-red-600 border-solid' : 'border-solid border-gray-500'}`}
              id='email'/>
              </div>
        <button type='submit' className={`button bg-blue-500 mb-8 mt-2 w-[30%] md:w-[20%] md:ml-[80%] ml-[60%] text-lg font-bold ${darkMode1 && 'bg-teal-700'}`} >Register</button>
        
            {isSubmitted && (
            <div className={`h-32 rounded-md text-center text-lg px-1 w-[65%] md:w-[25%] font-semibold opacity-70  italic flex flex-col mx-auto ${darkMode1 ? 'bg-gray-900' : 'bg-slate-200'}`}>
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