import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const FinalPage = ({ Clicked, selectedOption, Monthly, darkMode1,total, title, name, email, phonenumber, status, setStatus, clicked1, setClicked1 }) => {
    const [plan, setPlan] = useState('Arcade');
    const [addons, setAddons] = useState('Online Services');
    const [price, setPrice] = useState('$6/mon');
    const [price1, setPrice1 ] = useState('$3/mon');
    const historyFinal = useHistory();


   


  useEffect(() =>{
    if(Clicked === 'ard'){
        setPlan('Arcade');
    }else if(Clicked === 'adv'){
        setPlan('Advanced');
    }else if(Clicked === 'pro'){
        setPlan('Pro');
    }

    if(selectedOption === 'option1'){
        setAddons('Online Services');
    }else if(selectedOption === 'option2'){
        setAddons('Larger Storage');
    }else if(selectedOption === 'option3'){
        setAddons('Custom Profile');
    }

    if(Clicked === 'ard' && !Monthly){
        setPrice('$6/mon');
    }else if(Clicked === 'adv' && !Monthly){
        setPrice('$8/mon');
    }else if(Clicked === 'pro' && !Monthly){
        setPrice('$12/mon');
    }

    if(Clicked === 'ard' && Monthly){
        setPrice('$80/year');
    }else if(Clicked === 'adv' && Monthly){
        setPrice('$100/year');
    }else if(Clicked === 'pro' && Monthly){
        setPrice('$150/year');
    }
    
    if(selectedOption === 'option1' && !Monthly){
        setPrice1('$3/mon');
    }else if(selectedOption === 'option2' && !Monthly){
        setPrice1('$4/mon');
    }else if(selectedOption === 'option3' && !Monthly){
        setPrice1('$5/mon');
    }

    if(selectedOption === 'option1' && Monthly){
        setPrice1('$10/year');
    }else if(selectedOption === 'option2' && Monthly){
        setPrice1('$20/year');
    }else if(selectedOption === 'option3' && Monthly){
        setPrice1('$30/year');
    }


  },[Clicked, selectedOption, Monthly])

        function handleBack (){
            historyFinal.push('/form3');
        }

        function handleFinal (){
            MakePostRequest();
            historyFinal.push('/formfinal');
        }
   
        const postEndpoint = "http://localhost:8000/infos";
        const MakePostRequest = async () => {
          try {
          const postData = {name, email, phonenumber, plan, price, addons, price1, total, title, status  }
          const response = await axios.post(postEndpoint, postData);
      
          if (response.status === 201) { // Check for a successful POST request (replace 201 with the appropriate status code)
            console.log('POST request successful');
      
          } else {
            console.error('Error making POST request:', response.status);
          }
        } catch (error) {
          console.error('Error making POST request:', error);
        }
        }

        function handlePayment(){
         setClicked1(true)
         setStatus('Paid')
        }

    return ( 
        <div>
             <section className=" absolutle w-full  h-[30rem]">
        <div className="flex flex-col">
            <h1 className={`ml-[7.5%] pt-7 pb-4 tracking-wide text-2xl font-bold ${darkMode1 ? 'text-teal-100' : 'text-blue-950'}`}>
            Finishing Up
            </h1>
            <p className="ml-[7.5%] tracking-wide text-gray-500 pb-4">
            Double-check everything looks OK before confirming.
            </p>
            <div>
                <div  className={`flex justify-between w-[85%] h-16  ml-[7.5%] bg-opacity-70 rounded-t-lg bg-slate-200 mt-2 ${darkMode1 && 'bg-slate-900'}`}>
                    <h1  className=" ml-4 mt-4 text-lg font-semibold tracking-wider">{ plan  }</h1>
                    <p  className=" mr-4 mt-4 text-lg font-semibold text-red-600">{ price }</p>
                </div>

                <div className={`flex justify-between w-[85%] h-20  ml-[7.5%] bg-opacity-70 bg-slate-200  ${darkMode1 && 'bg-slate-900'}`}>
                    <h1 className=" ml-4 mt-5 font-semibold"> { addons } </h1>
                    <p className=" mr-4 mt-5 font-semibold text-red-600"> { price1 }</p>
                </div>
                <div class={`flex justify-between w-[85%] h-14 rounded-b-lg border-t border-black ml-[7.5%] bg-opacity-70 bg-slate-200  ${darkMode1 && 'bg-slate-900'} `}>
                    <p className="ml-4 mt-3 font-semibold text-lg md:text-xl tracking-wider">Total [{ title }]</p>
                    <p className="mr-4 mt-3 font-semibold text-lg md:text-xl tracking-wider text-red-600"> ${total}/{title} </p>
                </div>
            </div> 

            <div className='flex '>
               
               <h1 className={`ml-[30%] w-[30%] mt-3 md:w-[20%] text-center py-3 text-lg font-bold ${darkMode1 && 'bg-gray-100'} ${clicked1 ? 'bg-green-500':'bg-gray-500'}`} >{status}</h1>
                
    
               <button onClick={handlePayment} className={`button ml-2 bg-blue-500  w-[30%] md:w-[15%]  text-lg font-bold ${darkMode1 && 'bg-teal-700'}`} >Pay</button>
           </div>

        <div class="mt-10">
            <div class="flex justify-between mb-7">
                <button onClick={handleBack}  className="back transition-all ease-in-out duration-200 ml-[7.5%] font-semibold invisibl">Go back</button>

                <button onClick={handleFinal} className={`h-14 mr-[7.5%] w-28 text-lg font-bold text-white tracking-wide rounded-md ${darkMode1 ? 'bg-teal-700' : 'bg-blue-500'}`}>Confirm</button>
            </div>
        </div>
        </div>    
    </section> 


        </div>
     );
}
 
export default FinalPage;