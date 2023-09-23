// import Axios from "./Axios";
// import Axios2 from "./Axios2";
// import Aaxios from "./Aaxios";
import Axios3 from "./Axios3";
import Create from "./Create";
import HomeTodo from "./HomeTodo";
import NavTodo from "./NavTodo";
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
// import Step from "./Step";



const TodoApp = ({ darkMode }) => {

    return ( 
    
    <Router>
    <div className={`h-[100%] rounded-md w-screen backdrop-blur-md ${darkMode ? 'text-white' : 'text-black'}`}>
      <NavTodo />
     
       <Switch> 
          <Route path="/todo" >
          <HomeTodo darkMode4={ darkMode } />
          </Route>
          <Route path="/Create" >
          <Create darkMode4={ darkMode } />
          </Route>
          <Route path="/axios" >
          {/* <Axios darkMode4={ darkMode } /> */}
          {/* <Step /> */}
          {/* <Axios2 /> */}
          <Axios3 />
          {/* <Aaxios /> */}
          </Route>
        </Switch>
          
    </div>
    </Router>
    );
}


export default TodoApp;