import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


const Form3 = ({ darkMode1, Monthly, selectedOption, setSelectedOption }) => {

        const [ Service, setService ] = useState("$3/mon");
        const [ Storage, setStorage ] = useState("$4/mon");
        const [ Profile, setProfile ] = useState("$5/mon");
        const historySecond = useHistory();
        


        const handleOptionChange = (event) => {
          setSelectedOption(event.target.value);
        };


        function handleBack (){
            historySecond.push('/form2');
           }
        


        useEffect(() => {
            if (!Monthly) {
              setService("$3/mon");
              setStorage("$4/mon");
              setProfile("$5/mon");
            } else if(Monthly) {
              setService("$10/year");
              setStorage("$20/year");
              setProfile("$30/year");
            }
          }, [Monthly]);

          function handleSubmit (e) {
            e.preventDefault();
            if (selectedOption === 'option1' || selectedOption === 'option2' || selectedOption === 'option3') {
             historySecond.push('/form4');
            } 
        }

        function handleRadio(){
            setSelectedOption('option1');
        }
        function handleRadio2(){
            setSelectedOption('option2');
        }
        function handleRadio3(){
            setSelectedOption('option3');
        }
      
    return ( 
        <div>
            <h1 className={`ml-[4.95%] pt-7 pb-4 tracking-wide text-2xl font-bold ${darkMode1 ? 'text-teal-100' : 'text-blue-950'}`}>
            Pick add-ons
            </h1>
            <p className="ml-[4.95%] tracking-wide text-gray-500 pb-4">
            Add-ons helps enhance your gaming experience.
            </p>
       <form onSubmit={handleSubmit} >
           
           <div onClick={handleRadio}
           className={`border bg-gray-50 border-gray-300  w-[90%] ml-[4.95%] h-[80px] rounded-md  relative transition-all ease-in-out duration-200 
            hover:scale-105 hover:border-blue-900 cursor-pointer hover:shadow-2xl ${darkMode1 ? 'bg-opacity-0' : 'bg-opacity-70'}
            ${selectedOption === 'option1' ? 'border-red-500 hover:border-red-500 bg-fuchsia-200 bg-opacity-40': 'border-gray-300 hover:border-blue-900'}`}>
            <input type="radio" name="option" value="option1"
             checked={selectedOption === 'option1'}
             onChange={handleOptionChange}
            className="w-5 h-5 absolute mt-6 ml-2 " />
            <label for="option1" className="absolute flex  w-[82%] justify-between mt-3.5   ml-[15%]  ">
                <div className="flex flex-col">
                    <h2 className={`font-medium  ${darkMode1? 'text-white':'text-gray-700'}`}>Online Services</h2>
                    <p  className={`text-gray-500 leading-tight text-sm ${darkMode1 && 'text-white'}`}>Access to multiplayer games</p>
                </div>
                <p className="my-auto text-md text-blue-700 ">{Service}</p>
            </label>
            </div>

            
            <div onClick={handleRadio2}
            className={`border mt-3 bg-gray-50 border-gray-300  w-[90%] ml-[4.95%] h-[80px] rounded-md  relative transition-all ease-in-out duration-200 
            hover:scale-105 hover:border-blue-900 cursor-pointer hover:shadow-2xl ${darkMode1 ? 'bg-opacity-0' : 'bg-opacity-70'}
            ${selectedOption === 'option2' ? 'border-red-500 hover:border-red-500 bg-fuchsia-200 bg-opacity-40': 'border-gray-300 hover:border-blue-900'}`}>
            <input type="radio" name="option" value="option2" 
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange} 
            className="w-5 h-5 absolute mt-6 ml-2 " />
            <label for="option2" className="absolute flex  w-[82%] justify-between mt-3.5   ml-[15%]  ">
                <div className="flex flex-col">
                    <h2 className={`font-medium  ${darkMode1? 'text-white':'text-gray-700'}`}>Larger Storage</h2>
                    <p  className={`text-gray-500 leading-tight text-sm ${darkMode1 && 'text-white'}`}>Extra 1TB of cloud</p>
                </div>
                <p className="my-auto text-md text-blue-700 ">{Storage}</p>
            </label>
            </div>

            <div onClick={handleRadio3}
            className={`border mt-3 bg-gray-50 border-gray-300  w-[90%] ml-[4.95%] h-[80px] rounded-md  relative transition-all ease-in-out duration-200 
            hover:scale-105 hover:border-blue-900 cursor-pointer hover:shadow-2xl ${darkMode1 ? 'bg-opacity-0' : 'bg-opacity-70'}
            ${selectedOption === 'option3' ? 'border-red-500 hover:border-red-500 bg-fuchsia-200 bg-opacity-40': 'border-gray-300 hover:border-blue-900'}`} >
            <input type="radio" name="option" value="option3" 
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
            className="w-5 h-5 absolute mt-6 ml-2 " />
            <label for="option3" className="absolute flex  w-[82%] justify-between mt-3.5   ml-[15%]  ">
                <div className="flex flex-col">
                    <h2 className={`font-medium  ${darkMode1? 'text-white':'text-gray-700'}`}>Custom Profile</h2>
                    <p className={`text-gray-500 leading-tight text-sm ${darkMode1 && 'text-white'}`}>Personalized profile</p>
                </div>
                <p  className="my-auto text-md text-blue-700 ">{Profile}</p>
            </label>
            </div>

            <div className="mt-2">
            <div className="flex justify-between mb-7">
            <button onClick={handleBack} class=" transition-all mt-5 ease-in-out duration-200 md:ml-[6.95%] ml-[4.95%] font-semibold ">Go back</button>
                
            <button type='submit'  className={`button bg-blue-500  mr-[4.95%]  w-[30%] md:w-[25%] md:text-lg font-bold ${darkMode1 && 'bg-teal-700'}`} >Next Step</button>
            </div>
            </div>
       </form>



          
        </div>
        
     );
}
 
export default Form3;