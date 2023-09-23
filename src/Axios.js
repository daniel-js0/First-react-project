import { useEffect, useState } from 'react';
import axios from 'axios'
const apidata = "https://fakestoreapi.com/products";

const Axios = () => {
    const [title, setTitle]=useState([]);
    const [image, setImage]=useState([]);
    const [description, setDescription]=useState([]);
    const [number , setNumber] = useState(1);

    useEffect(()=>{
        async function getStoredData(){
            try{
            const response = await axios.get(`${apidata}/${number}`);
            setTitle(response.data.title);
            setImage(response.data.image);
            setDescription(response.data.description);
            }  catch (error) {
                // throw new Error('Cannot fetch data');
                console.error('Error fetching data:', error);
            }// console.log(response);
        }
        getStoredData();
    },[number]);

    return ( 
        <div className="text-center justify-center">
          <h1 className='cursor-text font-light leading-4 tracking-widest font-sans mt-11  text-4xl'>Our shop</h1>
           <div className='mt-9'>
            <select value={number} onChange={(e) => {setNumber(e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                

            </select>
           </div>
          <h1 className="mt-10 text-center font-bold text-2xl text-pink-700" >{ title } 
          <span className='text-yellow-900 font-semibold text-2xl' > - Product/{number} </span></h1>
          <img className=' mx-auto h-44 w-32' src={ image } alt="" />
            <p className=" px-32">{ description }</p>

        </div>
     );
}
export default Axios;