import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import HomePage from './component/HomePage/HomePage';
import { useState } from 'react';


function App() {
  let[show, setShow] = useState(false);
  return (
    <div className="">
      <HashRouter>

            {
              localStorage.getItem("email") === null ?
              (<Link style={{textDecoration:"none"}} to="/login">Login</Link>):
              (<ul className='d-flex gap-5'>
                <li style={{listStyleType:"none"}}><Link style={{textDecoration:"none", color:"black"}} to="/home">Home</Link></li>
                <li style={{listStyleType:"none"}} onClick={() => setShow(true)}> Company info
                  {
                    show ? 
                    <ul style={{border:"1px solid black", position:"absolute", padding:"5px"}}>
                      <li style={{listStyleType:"none"}} ><span style={{fontWeight:"bold"}}>Company:</span> Geeksynergy Technologies Pvt Ltd</li>
                      <li style={{listStyleType:"none"}}><span style={{fontWeight:"bold"}}>Address:</span> Sanjayanagar, Bengaluru-56</li>
                      <li style={{listStyleType:"none"}}><span style={{fontWeight:"bold"}}>Phone:</span> XXXXXXXXX09</li>
                      <li style={{listStyleType:"none"}}><span style={{fontWeight:"bold"}}>Email:</span> XXXXXX@gmail.com</li>
                    </ul>
                    :
                    ""
                  }

                </li>
                <li style={{listStyleType:"none"}}>{localStorage.getItem("username")}</li>
                <li style={{listStyleType:"none", color:"red"}} onClick={logout}>logout</li>
              </ul>)
            }

        <Routes>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/home' element={<HomePage/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

const logout = () => {
  localStorage.clear();
  window.location.reload();
}
