
import React from "react";
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AddRoute from "./components/AddRoute";
import AddBus from "./components/AddBus";
import OAuth2RedirectHandler from "./components/OAuth2RedirectHandler";

import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
    </Routes>
  
    </BrowserRouter>
    
  )

   
}

export default App;
