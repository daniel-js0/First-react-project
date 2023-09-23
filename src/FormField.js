import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import NavForm from './NavForm';
import Form from './form';
import Form2 from './form2';
import Form3 from './form3';
import { useState, useEffect } from 'react';
import FinalPage from './FinalPage';
import Final from './Final';







const FormField = ({ darkMode1, status, setStatus }) => {
   const [name, setName] = useState("");
   const [email, setEmail ] = useState("");
   const [phonenumber, setPhoneNumber] = useState();
   const [Monthly, setMonthly] = useState("");
   const [Clicked, setClick] = useState("");
   const [selectedOption, setSelectedOption] = useState('option1'); 
   const [Title, setTitle ] = useState('Monthly');
  const [clicked1, setClicked1] = useState(false);



   useEffect(() =>{
   
    if(Monthly){
        setTitle('Yearly')
    }else if (!Monthly){
        setTitle('Monthly')
    }

  },[Monthly])

  

   const words = name.split(' ');

   let secondWord = '';

   if (words.length >= 2) {
    secondWord = words[1];
   }

   let Number = '';

   if (Clicked === 'ard' && !Monthly) {
      Number = 6
   }else if(Clicked === 'adv' && !Monthly){
       Number = 8
   }else if(Clicked === 'pro' && !Monthly){
       Number = 12
   }

   if(Clicked === 'ard' && Monthly){
      Number = 80  
   }else if(Clicked === 'adv' && Monthly){
      Number = 100  
   }else if(Clicked === 'pro' && Monthly){
      Number = 150  
   }
   
   let Number1 = '';
   
   if(selectedOption === 'option1' && !Monthly){
       Number1 =   3 
   }else if(selectedOption === 'option2' && !Monthly){
       Number1 =   4 
   }else if(selectedOption === 'option3' && !Monthly){
       Number1 =   5 
   }

   if(selectedOption === 'option1' && Monthly){
       Number1 = 10  
   }else if(selectedOption === 'option2' && Monthly){
       Number1= 20  
   }else if(selectedOption === 'option3' && Monthly){
       Number1 = 30  
   }
   
   const Total = Number + Number1;
    
    return ( 
        <Router>

        <div className={`flex md:flex-row flex-col h-[100%] rounded-md  w-screen backdrop-blur-md ${darkMode1 ? 'text-gray-100': 'text-gray-700'}`} >

        <div className=' md:w-[17%] w-full md:ml-[20%] h-[9%] md:h-[70%] mt-8' >
        <NavForm darkMode1={darkMode1} />
        </div>

        <div className={`backdrop-blur-md md:w-[35%] w-full md:mx-0 mx-auto mt-3  h-[70%] ${darkMode1 ? 'text-gray-100': 'text-gray-700'}`} >
        
        <Switch>
          <Route exact path="/" >
          <Form darkMode1={ darkMode1 } name={name} setName={setName} email={email} setEmail={setEmail}
          phonenumber={phonenumber} setPhoneNumber={setPhoneNumber}  />
          </Route>
          <Route path="/form2" >
           <Form2  secondWord={secondWord} darkMode1={ darkMode1 } Monthly={Monthly} setMonthly={setMonthly} 
           Clicked={Clicked} setClick={setClick} />
         </Route>
          <Route path="/form3" >
           <Form3 darkMode1={ darkMode1 } Monthly={Monthly} selectedOption={selectedOption}
           setSelectedOption={setSelectedOption} />
          </Route>
          <Route path="/form4" >
           <FinalPage darkMode1={ darkMode1 } Clicked={Clicked} selectedOption={selectedOption} Monthly={Monthly}
           total={Total} title={Title} name={name} email={email} phonenumber={phonenumber} status={status} setStatus={setStatus}
           clicked1={clicked1} setClicked1={setClicked1}/>
          </Route>
          <Route path="/formfinal" >
          <Final secondWord={secondWord} darkMode1={ darkMode1 } Total={Total} Title={Title} clicked1={clicked1}/>
          </Route>
        </Switch>
          
        </div>
     
        </div>
        
         
       
  
    </Router>
     );
}
 
export default FormField;