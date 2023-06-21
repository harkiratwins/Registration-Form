import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Account from "./pages/Account";
import Forgotpassword from "./pages/Forgotpassword";
import Buttons from "./components/buttons";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="account" element={<Account />} />
          <Route path="forgotpassword" element={<Forgotpassword />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="contact" element={<Contact />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
