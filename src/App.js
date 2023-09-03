import logo from './logor.png';
import logodark from './logobkg1.png';
import Navbar from './Navbar';
import Form from "./form";
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import TodoApp from './TodoApp';
import { useState } from 'react';


function App() {
 
  const [darkClick , setDarkClick]  = useState('');
  const [lightClick , setLightClick]  = useState('');


  
  



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
        <Navbar handleDarkMode={handleDarkMode} handleLightMode={handleLightMode} />
        {/* content starts here  */}
      <div className={`min-h-screen bg-no-repeat bg-contain bg-center  ${darkClick && 'bg-black'} ${lightClick && 'bg-white'}`} style={{ backgroundImage: `url(${darkClick ? logodark : logo})` }}>
        <Switch>
          <Route exact path="/" >
            <Form darkMode1={darkClick} />
          </Route>
          <Route path="/todo" >
          <TodoApp  darkMode={darkClick}/>
          </Route>
        </Switch>
      </div>
   </div>

   </Router>
  
   
  );
}

export default App;
