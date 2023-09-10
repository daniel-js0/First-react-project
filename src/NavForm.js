import { Link } from "react-router-dom";


const NavForm = ({darkMode1}) => {

    return ( 
     <div className="flex md:flex md:flex-col flex-row justify-evenly ">
       
           <div class="opacity-90 md:flex ml-[3%] md:ml-0 mt-6">
                <Link to="/" className={`mt-9 px-4 py-2 md:px-0 md:py-0 w-8  h-8 text-center rounded-3xl border font-semibold  md:ml-7 ${darkMode1 ? 'border-white': 'border-black' }`}><span>1</span></Link>
                <div className="hidden md:flex md:flex-col ">
                    <h2 class="md:mt-7 md:ml-4 ">
                        STEP 1
                    </h2>
                    <h1 className="md:ml-4 font-bold tracking-wider">
                        YOUR INFO
                    </h1>
                </div>
            </div>  

            <div class="md:flex mt-6 ">
                <Link to="/form2" className={`mt-9 px-4 py-2 md:px-0 md:py-0  w-8 h-8 text-center rounded-3xl border 
                               md:mt-6 md:ml-7 ${darkMode1 ? 'border-white': 'border-black' }`}><span>2</span></Link>

                <div class="hidden md:flex md:flex-col">
                    <h2 class="md:mt-4 md:ml-4">
                        STEP 2
                    </h2>
                    <h1 class="md:ml-4 font-bold tracking-wider">
                        SELECT PLAN
                    </h1>
                </div>
            </div>

            <div class="md:flex mt-6">
                <Link to="/form3" class={`mt-9 px-4 py-2 md:px-0 md:py-0  w-8 h-8 text-center rounded-3xl border
                               md:mt-6 md:ml-7 ${darkMode1 ? 'border-white': 'border-black' }`}><span>3</span></Link>
                <div class="hidden md:flex md:flex-col">
                    <h2 class="md:mt-4 md:ml-4 ">
                        STEP 3
                    </h2>
                    <h1 class="md:ml-4 font-bold tracking-wider ">
                        ADD ONS
                    </h1>
                </div>
            </div>
            
            <div class="md:flex mt-6">
                <Link to="/form4" class={`mt-9 px-4 py-2 md:px-0 md:py-0  w-8 h-8 text-center rounded-3xl border
                              md:mt-6 md:ml-7 ${darkMode1 ? 'border-white': 'border-black' }`}><span>4</span></Link>
                <div class="hidden md:flex md:flex-col">
                    <h2 class="md:mt-4 md:ml-4 ">
                        STEP 4
                    </h2>
                    <h1 class="md:ml-4  font-bold tracking-wider">
                        SUMMARY
                    </h1>
                </div>
            </div>
      
     </div>
     );
}
 
export default NavForm;