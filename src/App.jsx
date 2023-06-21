import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Account from "./pages/Account";
import Forgotpassword from "./pages/Forgotpassword";
import Buttons from "./components/buttons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="account" element={<Account />} />
          <Route path="forgotpassword" element={<Forgotpassword />} />
          <Route path="buttons" element={<Buttons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
