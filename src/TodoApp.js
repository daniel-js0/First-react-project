import Create from "./Create";
import HomeTodo from "./HomeTodo";
import NavTodo from "./NavTodo";
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';



const TodoApp = ({ darkMode }) => {

    return ( 
    
    <Router>
    <div className={`h-screen rounded-md w-screen backdrop-blur-md ${darkMode ? 'text-white' : 'text-black'}`}>
      <NavTodo />
     
       <Switch> 
          <Route path="/todo" >
          <HomeTodo darkMode4={ darkMode } />
          </Route>
          <Route path="/Create" >
          <Create darkMode4={ darkMode } />
          </Route>
        </Switch>
          
    </div>
    </Router>
    );
}


export default TodoApp;