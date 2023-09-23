import { useEffect, useState } from 'react';
import axios from 'axios';



  const Aaxios = ({ darkMode}) => {
  
                      const [Users, setUsers] = useState([]);
                      
                      async function getStoredData(){
                          try{
                          const response = await axios.get('http://localhost:8000/infos');
                      
                          setUsers(response.data)
                          }  catch (error) {
                              // throw new Error('Cannot fetch data');
                              console.error('Error fetching data:', error);
                          }// console.log(response);
                      }

                      useEffect(()=>{
                          getStoredData();
                      },[]);

                      const deleteUser = (id) => {
                      handleDelete(id);
                      getStoredData();
                      }

                      const handleDelete = async (id) => {
                          // const [deleteResponse, setDeleteResponse] = useState(null);
                          try {
                            const response = await axios.delete(`http://localhost:8000/infos/${id}`, {
                              headers: {
                                'Content-Type': 'application/json', // Specify the content type
                              },
                            });
                            console.log('Data deleted:', response.data);
                          //   setDeleteResponse(response.data);
                          } catch (error) {
                            console.error('Error deleting data:', error);
                          //   setDeleteResponse(null);
                          }
                        };
      return ( 
          <div className={` h-[100%] rounded-md  w-screen backdrop-blur-md ${darkMode ? 'text-gray-100': 'text-gray-950'}`} >
            <h1 className='cursor-text font-light leading-4 tracking-widest font-sans py-4 ml-10  text-4xl'>User Database</h1>
            <table className='mt-7 w-[95%] ml-[2.5%]'>
                      <thead>
                          <tr className={`flex backdrop-blur-md h-11 bg-sky-400 ${darkMode ? 'bg-opacity-10' : 'bg-opacity-30' }`} >
                              <th className='py-2  px-4 ml-2  font-bold '>ID</th>
                              <th className='py-2 px-4 ml-[3.5%]  font-bold'>Name</th>
                              <th className='py-2 px-2 ml-[9.7%] w-24   font-bold'>Email</th>
                              <th className='py-2 px-4 ml-[9.1%]  font-bold'>PhoneNumber</th>   
                              <th className='py-2 px-4  font-bold'>Plan</th>   
                              <th className='py-2 px-4 ml-[5%]  font-bold'>Add-ons</th>   
                              <th className='py-2 px-4 ml-[2.5%]  font-bold'>Total</th>   
                              <th className='py-2 px-4 ml-[5.5%]  font-bold'>Status</th>   
                              <th className='py-2 px-4 ml-[1.5%]  font-bold'>Action</th>       
                          </tr>    
                      </thead>
                    
                      {Users.map((user) => (
                      <tbody>
                          <tr className='flex h-16 border-gray-300 border-b'>
                              <td className=" w-12   font-bold  " ><span><img className='mt-2  ml-4' src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" alt={user.plan} /></span></td>
                              <td className= {`py-4 ml-[4%] w-52  px-4 font-semibold bg-sky-200 ${darkMode ? 'bg-opacity-10' : 'bg-opacity-30'}`} >{ user.name } </td>
                              <td className={`py-4 w-52 px-6 bg-red-200 ${darkMode ? 'bg-opacity-10' : 'bg-opacity-30'} `}>{ user.email } </td>
                              <td className={` w-36 bg-sky-200 py-4 px-4 ${darkMode ? 'bg-opacity-10' : 'bg-opacity-30'}`}>  {user.phonenumber} </td>
                              <td className={`w-32 bg-red-200 py-1 px-4  flex flex-col ${darkMode ? 'bg-opacity-10' : 'bg-opacity-30'}`}>{user.plan} <span className='font-semibold'>{user.price}</span></td>
                              <td className={`w-36 bg-sky-200 py-1 px-4  ${darkMode ? 'bg-opacity-10' : 'bg-opacity-30'}`}>{user.addons} <span className='font-semibold'>{user.price1}</span></td>
                              <td className={`w-32 bg-gray-700 py-4 px-4 font-bold ${darkMode ? 'bg-opacity-10' : 'bg-opacity-20'}`}>${user.total}/{user.title}</td>
                              <td className={`w-20 py-5  bg-opacity-90 font-semibold  ${user.status === 'Pending' ? 'bg-red-500 text-gray-400 px-2' : 'bg-green-500 px-5'}`}>{user.status}</td>
                              <td className='mt-4 ml-10 text-red-600'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                              className="w-6 h-6"
                              onClick={() => deleteUser(user.id)}  >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                              </td>  
                          </tr>
                    </tbody>))}         
          </table>
          </div>
      );
  }
  export default Aaxios;