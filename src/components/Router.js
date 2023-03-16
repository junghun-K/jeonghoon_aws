import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./view/About/About";
import ProjectPage from "./view/Project/Project";
import StartPage from "./App";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          Start
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>
          About
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/project'>
          Project
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}