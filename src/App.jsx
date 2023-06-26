import React from "react";
import "./App.css";
import NewCard from "./components/NewCard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Account from "./pages/Account";
// import Forgotpassword from "./pages/Forgotpassword";
// import Contact from "./pages/Contact";
// import CardComponent from "./components/Card";
// import CardContainer from "./components/CardContainer ";
// import NewCard from "./components/NewCard";

function App() {
  return (
    <NewCard/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />}/>
    //       <Route path="account" element={<Account />} />
    //       <Route path="forgotpassword" element={<Forgotpassword />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="CardComponent" element={<CardComponent />} />
    //       <Route path="CardContainer" element={<CardContainer />} />
    //       <Route path="NewCard" element={<NewCard />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
