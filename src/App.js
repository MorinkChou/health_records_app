import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Header from './components/Header';
import NavigatorForLogin from './components/NavigatorForLogin';
import Navigator from './components/Navigator';
import FormLogin from './components/FormLogin';
import HomeComponent from './components/HomeComponent';
import FormRegister from './components/FormRegister';
import DataList from './components/DataList';
import AddData from './components/AddData';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [isLogin,setIsLogin] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = async ( username, password ) => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/',{
        username,
        password
      });
      const token = response.data.access;
      setToken(token);
      setIsLogin(true);
    }catch (error) {
      console.error('Login failed',error);
    }
  }

  const handleLogout = () => {
    setToken(null);
    setIsLogin(false);
  }

  const mainNav = isLogin?<Navigator handleLogout={handleLogout} />:<NavigatorForLogin />
  return (
    <>
      <Router>
        <Header />
          {mainNav}

        
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/login'element={isLogin ? (<Navigate to='/' />):(<FormLogin handleLogin={handleLogin} />)} />
          <Route path='/register' element={<FormRegister />} />

          <Route path='/datalist' element={<DataList token={token} />} />
          <Route path='/add_data' element={<AddData token={token} />} />

        </Routes>

        <Footer />
       
      </Router>
    </>
  );
}

export default App;
