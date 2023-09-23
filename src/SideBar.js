import { Link } from "react-router-dom";


const SideBar = ({onClose, darkMode1,setOnClose }) => {
    // const [isOpen, setIsOpen] = useState("fasle");
    function handleRemove (){
      setOnClose(!onClose)
    }
    

    return ( 
        <div>
      {onClose && (<div className={`absolute top-0 w-[60%] md:hidden h-full ml-[35%]  backdrop-blur-sm  transform  translate-x-6 ${darkMode1 ? 'bg-green-600 saturate-50' : 'bg-white '}`}>

               
            <div className="flex flex-col ml-5 mt-14 ">

                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  <Link to="/" className={`text-2xl font-light  ml-1 hover:cursor-pointer ${darkMode1 ? ' text-white' : ' text-black'}`}>FormField</Link>
                </div>

                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-7 mt-3 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                   <Link to="/todo" className={`text-2xl font-light mt-2 ml-1  hover:cursor-pointer   ${darkMode1 ? ' text-white' : ' text-black'}`}>TodoApp</Link>
                </div>

                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                  <Link to="/data" className={`text-2xl font-light  mt-2 ml-1 hover:cursor-pointer   ${darkMode1 ? ' text-white' : ' text-black'}`}>Data[db]</Link>
                  </div>
            </div>
           <button
                className="fixed top-2 left-3  text-gray-950 hover:text-red-600"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  onClick={handleRemove}
                  className={`w-5 h-5 ${darkMode1 && 'text-white'}`}>     <path fillRule="evenodd" d="M2.646 2.646a.25.25 0 01.354 0L12 11.293l9.293-9.293a.25.25 0 01.354 0l1.414 1.414a.25.25 0 010 .354L13.293 12l9.293 9.293a.25.25 0 010 .354l-1.414 1.414a.25.25 0 01-.354 0L12 12.707l-9.293 9.293a.25.25 0 01-.354 0l-1.414-1.414a.25.25 0 010-.354L10.707 12 1.414 2.707a.25.25 0 010-.354l1.414-1.414z" clipRule="evenodd"/>
                </svg>
          </button>


      </div>)}

        </div>
    
    // onClick={() => { handleClose(); }}

     );
}
 
export default SideBar;