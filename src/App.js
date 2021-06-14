import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Login from './Login';
import {useStateValue} from "./StateProvider";
function App() {
  
  const [{user}] = useStateValue();

  return (
    <div className="App">
      <Router>
          {!user?(<h1>
            <Login/>
          </h1>):(<>
          
            <Header/>

         <div className="app__body" >
          <Sidebar/>
         <Switch>
          <Route path={"/room/:roomid"}>
             
            <Chat />
   
          </Route>
          <Route path="/">
   
            <h1>Welcome</h1>
   
          </Route> 
        </Switch>
</div>   

          
          </>)}
       
      </Router>
       
    </div>
  );
}

export default App;
