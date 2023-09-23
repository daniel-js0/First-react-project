import { Link } from "react-router-dom";


const NavTodo = () => {
    return ( 

        <div className='flex flex-row h-11 w-[90%] justify-center  ' >
        <h1 id="todo" className="  cursor-text font-light text-2xl leading-4 tracking-widest font-sans ml-[11%] md:mt-6 mt-9  md:text-4xl ">TODO</h1>
        <Link to="/todo" className=" ml-[12%] h-8 md:text-2xl font-light  hover:text-red-700 mt-9 md:mt-7 " >Home </Link>
        <Link to="/Create" className=" ml-4 h-8 md:text-2xl font-light  hover:text-red-700 mt-9 md:mt-7 " >NewTodo </Link>
        <Link to="/axios" className=" ml-4 h-8 md:text-2xl font-light  hover:text-red-700 mt-9 md:mt-7 " >Axios</Link>

        
    </div>
     );
}
  
export default NavTodo;