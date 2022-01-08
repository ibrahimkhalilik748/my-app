import './App.css';
import Card from './Components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import EditCard from './Components/Card/EditCard';
import SignUp from './Components/SignUpAndLogIn/SignUp/SignUp';
import LogIn from './Components/SignUpAndLogIn/LogIn/LogIn';
import { createContext, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const userContext = createContext();

function App() {

  const [userDetails, setUserDetails] = useState({})
  return (
    <div className="App">
      <userContext.Provider value={[userDetails, setUserDetails]}>
        <Router>
          <div>

            <Routes>
              {/* <Route exact path="/" element={<SignUp />} /> */}
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/" element={<Card />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/home" element={<Card />} />
              <Route path="/edit" element={<EditCard />} />
              <Route path="/edit/:_id" element={<EditCard />} />
            </Routes>
          </div>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
