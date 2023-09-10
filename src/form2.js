import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Form2 = ({ darkMode1, Name, Monthly, setMonthly, Clicked, setClick, secondWord }) => {

    const [Arcade, setArcade] = useState("$6/mon");
    const [Advanced, setAdvanced] = useState("$8/mon");
    const [Pro, setPro] = useState("$12/mon");
    const [Err, setErr] = useState(false);

   
    useEffect(()=> {
        if (Err) {
          const timer = setTimeout(() => {
            setErr(false);
          }, 3000); 

          return () => {
            clearTimeout(timer);
        };
        }  

        
      },[Err]);

    const historyFirst = useHistory();

   

   function handleBack (){
    historyFirst.push('/');
   }


   function handleToggle() {
    setMonthly(!Monthly);

    
    if(Monthly){
      setArcade("$6/mon");
      setAdvanced("$8/mon");
      setPro("$12/mon");
    }else if (!Monthly){
      setArcade("$80/year")
      setAdvanced("$100/year");
      setPro("$150/year");
    localStorage.setItem('Monthly', !Monthly);
    }else if(Arcade === '$6/mon' && Advanced === '$8/mon' &&  Pro === '$12/mon'){
        setMonthly(Monthly);   
    }
   }

   function handleSubmit(e) {
    e.preventDefault();
    if (Clicked === 'ard' || Clicked === 'adv' || Clicked === 'pro'){
    historyFirst.push('/form3');
    }else if(Clicked === ""){
        setErr(true);
    }

   }

   const handleClick = (tab) => {
    setClick(tab);
   }


   
    return (  
        <div>
             <h3 className={`ml-[4.95%] md:mt-8 mt-2 tracking-wide text-lg ${darkMode1 ? 'text-white' : 'text-black'}`}>
                Hello, 
                <span className={`tracking-wide text-2xl font-bold ${darkMode1 ? 'text-red-500' : 'text-fuchsia-800'}`}
                > {secondWord} </span>
            </h3>
             <h1 className={`ml-[4.95%] md:mt-3  tracking-wide text-xl font-bold ${darkMode1 ? 'text-teal-100' : 'text-blue-950'}`}>
            Select your plan
            </h1>
           
            <p className="ml-[4.95%] mt-1 tracking-wide text-gray-500 pb-4">
            You have the option of monthly or yearly billing.
            </p>
            
    
   <form onSubmit={handleSubmit}>

   {Err && (<div id="errormsg" className=" mt-[-8] md:mt-[-4] mb-2 rounded-sm font-semibold text-red-500 w-56 mx-auto h-5 italic text-md ">You have to select an Option</div>)}
                    <div className="md:flex">
                    <label for="arcade" className=" absolute flex mt-5 gap-10 ml-[10%] ">
                            <div className="" >
                                <p  className={`font-bold text-gray-700 ${darkMode1 && 'text-white'}`}>Arcade</p>
                                <p  className={`text-blue-700 ${darkMode1 && 'text-blue-300'}`}>{ Arcade }</p>
                            </div>
                        </label>
                    <input type="checkbox"
                      onClick={() => handleClick('ard')}
                      className={`appearance-none border mt-3  md:w-[30%] w-[90%]
                      ml-[4.95%] md:h-[96px]  h-[72px] rounded-md transition-all ease-in-out duration-200 hover:scale-105 cursor-pointer hover:shadow-2xl
                      ${Clicked === 'ard' ? 'border-red-500 hover:border-red-500 bg-fuchsia-200 bg-opacity-40': 'border-gray-300 hover:border-blue-900'}`}/>
                    
                        <label for="arcade" className="absolute start-0 mt-5 flex  gap-10 ml-[10%] md:ml-[42%] ">
                            <div>
                                <p className={`font-bold text-gray-700 ${darkMode1 && 'text-white'}`}>Advanced</p>
                                <p className={`text-blue-700 ${darkMode1 && 'text-blue-300'}`}>{ Advanced }</p>
                            </div>
                        </label>
                        <input type="checkbox"
                        onClick={() => handleClick('adv')}
                        className={`appearance-none border mt-3 md:w-[30%]
                        md:h-[96px] w-[90%] ml-[4.95%] h-[72px] rounded-md transition-all ease-in-out duration-200 hover:scale-105 hover:border-blue-900 cursor-pointer hover:shadow-2xl 
                        ${Clicked === 'adv'  ? 'border-red-500 hover:border-red-500 bg-fuchsia-200 bg-opacity-40': 'border-gray-300 hover:border-blue-900'}`}/>

                        <label for="arcade" className="absolute start-0 mt-5 flex gap-10 ml-[10%] md:ml-[77%] ">
                            <div >
                                <p className={`font-bold text-gray-700 ${darkMode1 && 'text-white'}`}>Pro</p>
                                <p className={`text-blue-700 ${darkMode1 && 'text-blue-300'}`}>{ Pro }</p>
                            </div>
                        </label>
                        <input type="checkbox"
                        onClick={() => handleClick('pro')}
                        className={`appearance-none border mt-3 md:w-[30%]
                        md:h-[96px] w-[90%] ml-[4.95%] h-[72px] rounded-md transition-all ease-in-out duration-200 hover:scale-105 hover:border-blue-900 cursor-pointer hover:shadow-2xl 
                        ${Clicked === 'pro' ?  'border-red-500 hover:border-red-500  bg-fuchsia-200 bg-opacity-40': 'border-gray-300 hover:border-blue-900'}`}/>
                        </div>
                        
                        <div className={`w-[90%] h-[60px] bg-opacity-50 ml-[4.95%]  md:ml-[6.95%] mt-4 rounded-md  flex justify-evenly gap-[-16] ${darkMode1 ? 'bg-gray-800 bg-opacity-10 ' : 'bg-fuchsia-300 bg-opacity-50 '}`}>
                    
                        <h1 className={`mt-4 start-0 ${(darkMode1 && Monthly) ? 'text-white': (!Monthly && darkMode1) ? 'text-blue-800 ' :  'text-gray-800'} ${!Monthly && 'text-blue-800 font-semibold'}`}>Monthly</h1>
                    
                        <label for="toggler" className="relative">
                        <input type= "checkbox"
                        className={`cursor-pointer appearance-none mt-3.5 h-7 rounded-full w-12  ${Monthly ? 'bg-gray-600': 'bg-gray-400'}`} />
                    
                    {!Monthly ? (<span onClick={handleToggle} className="cursor-pointer bg-white w-6 h-6 ml-0.5 mt-4 rounded-full transition-transform duration-300 transform absolute start-0"></span>) :
                    
                        (<span onClick={handleToggle}  className="cursor-pointer bg-white w-6 h-6 mr-0.5 mt-4 rounded-full transition-transform duration-300 transform absolute end-0"></span>)}
                        </label>
                        
                        <h1  className={`mt-4 ${(darkMode1 && !Monthly) ? 'text-white': (Monthly && darkMode1) ? 'text-blue-800' : 'text-gray-800'} ${Monthly && 'text-blue-800 font-semibold'} `}>Yearly</h1>

                        </div> 

                        <div class="md:mt-2  mt-2">
                        <div class="flex justify-between ">
                            <button onClick={handleBack} class=" transition-all mt-2 ease-in-out  duration-200 md:ml-[6.95%] ml-[4.95%] font-semibold ">Go back</button>
                            
                            <button type='submit' className={`button bg-blue-500  mr-[4.95%]  w-[30%] md:w-[25%] mb-2 md:text-lg font-bold ${darkMode1 && 'bg-teal-700'}`} >Next Step</button>
                        </div>
        </div>


   </form>
           

           
        </div>
  
    );
}
 
export default Form2;