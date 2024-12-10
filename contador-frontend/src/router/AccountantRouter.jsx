// eslint-disable-next-line no-unused-vars
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../views/Home.jsx";
import StartUpView from "../views/StartUpView.jsx";
import UserForm from "../views/users/UserForm.jsx";
import UserList from "../views/users/UserList.jsx";
import UserLogin from "../views/users/UserLogin.jsx";
import UserRegister from "../views/users/UserRegister.jsx";

export const AccountantRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/startup/:id" element={<StartUpView></StartUpView>}/>
        <Route path="/startup/addIncome/:id" element={<StartUpView></StartUpView>}/>
        <Route path="/startup/addOutcome/:id" element={<StartUpView></StartUpView>}/>
        <Route path="/startup/print/:id" element={<StartUpView></StartUpView>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/users/new" element={<UserForm/>}/>
        <Route path="/users/edit/:id" element={<UserForm/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/register" element={<UserRegister/>}/>
      </Routes>
    </BrowserRouter>
  )
}
