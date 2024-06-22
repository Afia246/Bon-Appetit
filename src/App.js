
import './App.css';
import Home from './Screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import Login from './Screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screens/Signup.js';
function App() {
  return (
    <Router>

      <div>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>  
          <Route exact path="/creatuser" element={<Signup/>}/>  
      </Routes>

      </div>

    </Router>
  );
}

export default App;
