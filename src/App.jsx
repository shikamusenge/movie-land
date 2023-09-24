import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";
import ExercisePage from "./pages/ExercisePage";
import MyExercises from "./jojo/MyExercises";
import TaskPage from "./Challanges/TaskPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/users/Dashboard";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:user" element={<About />} />
        <Route path="/contuct" element={<Contact />} />
        <Route path="/exercsie2" element={<ExercisePage />} />
        <Route path="/jojo" element={<MyExercises />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
