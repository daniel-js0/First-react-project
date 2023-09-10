import Visa from './visa.png';
import Mstr from './mstr.png';
import Pay from './paypal.png';
import Btc from './bitcoin1.png';


const Final = ({ darkMode1, secondWord, Total, Title }) => {

    return ( 
    <div>
        <div className={` text-center w-[85%] h-72 mt-20  ml-[7.5%] bg-opacity-70 rounded-2xl bg-slate-200  ${darkMode1 && 'bg-slate-900'}`}>
            
            
            <h1 className={` pt-7 pb-4 tracking-wide text-2xl font-bold ${darkMode1 ? 'text-teal-100' : 'text-blue-950'}`}>
            Thank You, 
            <span className={`tracking-wide text-2xl font-bold ${darkMode1 ? 'text-red-500' : 'text-fuchsia-800'}`}>
            {secondWord}</span> 
            </h1>
            
           
            <p className="tracking-wide text-gray-500 pb-4"> We hope you enjoy our Services </p>
               
             <h1  className="mt-4 text-lg font-semibold tracking-wider">You are to pay <span className="text-red-500">${Total}</span> on a 
             <span className="text-red-500"> {Title} </span>basis </h1>
                
               
         <div class="flex flex-row  justify-center mt-[8%] h-12 w-100%]">
            <img src={Visa} className="h-7 w-16 rounded-s-md " alt='visa'  width="100" height="60"/>
            <img src={Mstr} class="h-7 w-12  "  alt="mst" width="100" height="60"/>
            <img src={Pay} class="h-7 w-16   "alt="pay" width="100" height="60"/>
            <img src={Btc} class="h-7 w-10 rounded-e-md " alt="pay" width="100" height="60"/>

          </div>
      
   
      
        </div>    



  </div>
     );
}
 
export default Final;