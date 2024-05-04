
import React, { useState } from 'react'
import './App.css';
import Dashboard from './Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import Logout from './Logout';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (username, password) => {
    setUserData({ username, password });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserData({
      username: '',
      password: ''
    });
    setIsLoggedIn(false);
  };

  return (
    <div >
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard userData={userData} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/signOut" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div >
<div className='formCenter'>
      <form onSubmit={handleSubmit} className='formBody'>
        <div className='row'>
          <div className='col-lg-4 offset-4'>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="floating-input mb-3" placeholder="User Name" />
          </div>
          <div className='col-lg-4 offset-4'>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="floating-input mb-3" placeholder="Password" />
          </div>
          <div className='col-lg-4 offset-4 text-center'>
            <button type="submit" className="btn btn-raised btn-md btnSubmit">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default App;

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [data, setData] = useState({
//     username: '',
//     password: ''

//   })
//   const handleLogin = (username, password) => {
//     setUserData({ username, password });
//     setIsLoggedIn(true);
//   };
//   const handleLogout = () => {
//     setUserData({
//       username: '',
//       password: ''
//     });
//     setIsLoggedIn(false);
//   };
//   const [showSidebar, setShowSidebar] = useState(false)
//   var { username, password } = data;
//   const changeHandler = e => {
//     setData({ ...data, [e.target.name]: [e.target.value] })
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     console.log("data", data);
//     // setTimeout(() => {
//       if (data.username != "" && data.password != "") {
//         console.log("ENTER INTO IF data", data)
//         setShowSidebar(true)
//       } else {
//         console.log("ENTER INTO IF data", data);
        
//         setShowSidebar(false)
//       }
//     // }, 500);

    
//   }
//   return (
//     <div className="mainContent container">
//       <div className="row">
//         <div >
//           {!showSidebar && (
//             <center className='formCenter'>
//               <form onSubmit={submitHandler}>
//                 <div className='row'>
//                   <div className='col-lg-4 offset-4'>
//                     <div className='floating-label'>
//                     <input type="text" name="username" value={username} onChange={changeHandler} className="floating-input mb-3" placeholder="User Name" />
//                    <label>User Name</label>
//                     </div>

//                   </div>
//                   <div className='col-lg-4 offset-4'>
//                     <div className='floating-label'>
//                     <input type="password" name="password" value={password} onChange={changeHandler} className="floating-input mb-3" placeholder="Password" />
//                      <label>Password</label>
//                     </div>

//                   </div>
//                   <div className='col-lg-4 offset-4'>
//                     <button type="submit" className="btn btn-raised btn-md btnSubmit">Submit</button>

//                   </div>
//                 </div>
               

//               </form>
//             </center>
//           )}
//         </div>
//         {showSidebar && (
//           <div >
//             <Dashboard {...data} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;