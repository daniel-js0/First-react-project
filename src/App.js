import logo from './logor.png';
import logodark from './logobkg1.png';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import TodoApp from './TodoApp';
import { useState } from 'react';
import FormField from './FormField';
import SideBar from './SideBar';
import Aaxios from './Aaxios';


function App() {
 
  const [darkClick , setDarkClick]  = useState('');
  const [lightClick , setLightClick]  = useState('');
  const [onClose , setOnClose ] = useState("");
  const [status, setStatus]= useState('Pending');



    function handleOpen (){
        setOnClose(!onClose);
    }


  function handleDarkMode(e){
    setDarkClick(true);
    setLightClick(false);
}
function handleLightMode(w){
  setLightClick(true);
  setDarkClick(false);
}
// html rendering starts here -------------------------------------------------------------------------------------
  return (

   <Router>
   <div className="App">
        <Navbar handleDarkMode={handleDarkMode} handleLightMode={handleLightMode} handleOpen={handleOpen} />
        {/* content starts here  */}
      <div className={`md:h-[65rem] h-screen   bg-no-repeat bg-contain  bg-center  ${darkClick && 'bg-black'} ${lightClick && 'bg-white'} ${(onClose && darkClick) ? 'bg-black' : (onClose ? 'brightness-50 bg-stone-50' : '')}
                 `} style={{ backgroundImage: `url(${darkClick ? logodark : logo})` }}>
       
       
        <Switch>
          <Route exact path="/" >
          <FormField darkMode1={darkClick} status={status} setStatus={setStatus}/>
          </Route>
          <Route path="/todo" >
          <TodoApp  darkMode={darkClick}/>
          </Route>
          <Route path="/data" >
          <Aaxios darkMode={darkClick}/>
          </Route>
        </Switch>
        
      </div>
      <div>
          <SideBar onClose={onClose} darkMode1={darkClick} setOnClose={setOnClose} />
      </div>
   </div>

   </Router>
  
   
  );
}

export default App;
