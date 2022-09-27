
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import Juera from './components/juera'

import {useAuth0} from '@auth0/auth0-react';

function App() {
  
  const {isAuthenticated} =useAuth0()

  return (
    <div className="App">
      <h1>mi primera login </h1>
      {
        isAuthenticated ? <Juera/> : <Login/>
      }
      <Profile/> 
    </div>
  );
}

export default App;
