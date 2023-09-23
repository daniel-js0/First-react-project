import { useState } from 'react';
import axios from 'axios'
// const apidata="https://fakestoreapi.com/products";

const Axios3 = () => {
      // const [products, setProducts] = useState([]);
      const [Pending, setPending ] = useState(false);
      // const [Err, setErr] = useState(false);
      const [Task, setTask] = useState('');
     



    // useEffect(()=>{
    //   if(Pending === true){
    //     async function getStoredData(){
    //         try{
    //         const response = await axios.get(`${apidata}`);
    //         if (response.status === 200) { // Check for a successful response status
    //             setProducts(response.data);
    //             setErr(false); // Reset the error state
    //             setPending(false);
    //           } else if(response.status !== 200) {
    //             setErr(true);
    //           }
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //           setErr(true);
    //         } 
    //        // console.error('Error fetching data:', error);         
    //     }
    //     getStoredData();
    // }
    // },[Pending]);

    const handleClick = (e) =>{
        e.preventDefault();
        setPending(true);
        makePostRequest();

    }

  const postEndpoint = "https://jsonplaceholder.typicode.com/posts";

  const makePostRequest = async () => {
    try {
      const postData = {Task}; // Replace with your POST data
      const response = await axios.post(postEndpoint, postData);

      // Handle the response as needed
      if (response.status === 201) { // Check for a successful POST request (replace 201 with the appropriate status code)
        console.log('POST request successful');
        setPending(false);

      } else {
        console.error('Error making POST request:', response.status);
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }

    return ( 
        <div className="text-center flex flex-col">
        <h1 className="mt-8 text-center font-bold text-2xl text-pink-700">All Product List</h1>


        <input type="text" 
            className='px-2 w-[80%] md:w-[30%] mt-2 h-10 mx-auto rounded-lg border  opacity-50 border-dashed border-emerald-500'
            required 
            value={Task}
            onChange={(e) => setTask(e.target.value)}
            />
      
     
        {!Pending && (<button
          className="bg-green-600 text-white px-4 py-2 mt-5 mx-auto rounded-md w-[30%] text-center md:w-[10%] text-lg font-light hover:cursor-pointer"
          onClick={handleClick}
        >
          Make POST Request
        </button>)}
        {Pending && (<button
          className="bg-green-600 text-white px-4 py-2 mt-5 mx-auto rounded-md w-[30%] text-center md:w-[10%] text-lg font-light hover:cursor-pointer"
          onClick={handleClick}
        >
          POST..............
        </button>)}

      
    
         




{/*        
            <div className="flex flex-wrap justify-center ">
                {Err && <h1 className='text-2xl text-red-600 font-semibold' >ErroR fetching API</h1> }
                {products.map((product) => (
                    <div key={product.id} className="m-4 mt-10 w-[80%] md:w-[30%] h-[25%] rounded-lg bg-fuchsia-400 bg-opacity-40">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <img className="h-44 w-32 mx-auto" src={product.image} alt={product.title} />
                        <p className="px-12">{product.description}</p>
                    </div>))}
            </div> */}
            {/* {!Pending && <button className="bg-red-800 text-white px-4 py-2 mt-5 mx-auto rounded-md
              w-[30%] text-center md:w-[10%] text-lg  font-light hover:cursor-pointer" 
              onClick={handleClick}>Fetch API</button>}
             {Pending && <button disabled className='bg-red-400 text-white px-4 py-2 mt-5 mx-auto rounded-md
              w-[30%] text-center md:w-[12%] text-lg hover:cursor-progress font-light hover:bg-red-300' >Fetching API...</button>} */}





      
        </div>
     );
}
export default Axios3;