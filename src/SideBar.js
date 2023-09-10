import { Link } from "react-router-dom";


const SideBar = ({onClose, darkMode1,setOnClose }) => {
    // const [isOpen, setIsOpen] = useState("fasle");
    function handleRemove (){
      setOnClose(!onClose)
    }
    

    return ( 
        <div>
      {onClose && (<div className={`absolute top-14 w-[60%] md:hidden h-full ml-[35%]  backdrop-blur-sm  transform  translate-x-6 ${darkMode1 ? 'bg-green-600 saturate-50' : 'bg-white '}`}>

                <div className="flex flex-col mt-5 ">
                <Link to="/" className={`md:text-xl h-8 px-3 py-1 w-24 ml-3 rounded-lg    text-md  hover:text-red-700   hover:bg-cyan-500 hover:bg-opacity-40 ${darkMode1 ? 'bg-green-950 text-white' : 'bg-fuchsia-200 text-black'}`}>FormField</Link>
                
                <Link to="/todo" className={`md:text-xl mt-4 w-24 py-1 ml-3 rounded-lg bg-fuchsia-200 h-8 px-3 text-md hover:text-red-700 text-black    hover:bg-cyan-500  hover:bg-opacity-40 ${darkMode1 ? 'bg-green-950 text-white' : 'bg-fuchsia-200 text-black'}`}>TodoApp</Link>

                </div>
              <button
                className="fixed top-5 right-5  text-gray-950 hover:text-red-600"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  onClick={handleRemove}
                  className={`w-6 h-6 ${darkMode1 && 'text-white'}`}>     <path fillRule="evenodd" d="M2.646 2.646a.25.25 0 01.354 0L12 11.293l9.293-9.293a.25.25 0 01.354 0l1.414 1.414a.25.25 0 010 .354L13.293 12l9.293 9.293a.25.25 0 010 .354l-1.414 1.414a.25.25 0 01-.354 0L12 12.707l-9.293 9.293a.25.25 0 01-.354 0l-1.414-1.414a.25.25 0 010-.354L10.707 12 1.414 2.707a.25.25 0 010-.354l1.414-1.414z" clipRule="evenodd"/>
                </svg>
              </button>


            </div>)}

        </div>
    
    // onClick={() => { handleClose(); }}

     );
}
 
export default SideBar;