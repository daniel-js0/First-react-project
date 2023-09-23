import { useEffect, useState } from 'react';
import axios from 'axios'
const apidata="https://jsonplaceholder.typicode.com/photos";

const Axios2 = () => {
      const [products, setProducts] = useState([]);
      const [Pending, setPending ] = useState(false);
      const [Err, setErr] = useState(false);

    useEffect(()=>{
      if(Pending === true){
        async function getStoredData(){
            try{
            const response = await axios.get(`${apidata}`);
            if (response.status === 200) { // Check for a successful response status
                setProducts(response.data);
                setErr(false); // Reset the error state
                setPending(false);
              } else if(response.status !== 200) {
                setErr(true);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
              setErr(true);
            } 
           // console.error('Error fetching data:', error);         
        }
        getStoredData();
    }
    },[Pending]);

    const handleClick = (e) =>{
        e.preventDefault();
        setPending(true);

    }

    return ( 
        <div className="text-center justify-center">
       
        <h1 className="mt-10 text-center font-bold text-2xl text-pink-700">All Product List</h1>
            <div className="flex flex-wrap justify-center ">
                {Err && <h1 className='text-2xl text-red-600 font-semibold' >ErroR fetching API</h1> }
                {products.map((product) => (
                    <div key={product.id} className="m-4 mt-10 w-[80%] md:w-[30%] h-[25%] rounded-lg bg-fuchsia-400 bg-opacity-40">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <img className="h-44 w-32 mx-auto" src={product.url} alt={product.title} />
                        <p className="px-12">{product.url}</p>
                    </div>))}
            </div>
            {!Pending && <button className="bg-red-800 text-white px-4 py-2 mt-5 mx-auto rounded-md
              w-[30%] text-center md:w-[10%] text-lg  font-light hover:cursor-pointer" 
              onClick={handleClick}>Fetch API</button>}
             {Pending && <button disabled className='bg-red-400 text-white px-4 py-2 mt-5 mx-auto rounded-md
              w-[30%] text-center md:w-[12%] text-lg hover:cursor-progress font-light hover:bg-red-300' >Fetching API...</button>}
        </div>
     );
}
export default Axios2;