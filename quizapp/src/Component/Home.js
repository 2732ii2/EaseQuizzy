import React from 'react'
import Admin from './Admin';
import Main from './Main';
import { Route, Routes } from "react-router-dom";
import Question from './Question';
import { useSelector } from 'react-redux';
import Student from './Student';
import Test from './Test';
export default function Home() {
   var value= useSelector(state=>state);
   console.log(value);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/test" element={<Test />} />
        <Route path="/admin/questions" element={<Question obj={value} />} />
      </Routes>
    </div>
  );
}
