import Login from './components/Login';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState([]);
  const getData = (childData) => {
    console.log(childData)
    setUserData([...userData, childData])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup getData={getData} />}></Route>
          <Route path='/login' element={<Login getData={userData} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;