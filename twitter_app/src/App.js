import logo from './logo.svg';
import './App.css';
// import Nav from './comp/navBar/nav'
// import SignUp from './comp/Auth/signUp'
import {BrowserRouter as Router,Route} from   "react-router-dom";
import SignUp from "./comp/Auth/signUp"
import LogIn from "./comp/Auth/logIn"
import Nav from "./comp/navBar/nav"
function App() {
  return (
    <div>



<Router>
 
 <div>
<Route path ='/' exact  component ={Nav}></Route>
<Route path ='/signUp' exact component ={SignUp}></Route>
  <Route path ='/login' exact component ={LogIn}></Route>
 </div>

</Router>

      {/* <Nav/>
      <SignUp/> */}
    </div>

  );
}

export default App;
