import {Route, Routes} from "react-router-dom"
import { useState } from 'react'
import './App.css'
import PostsList from './components/classwork_exercise/PostsList';
import PostDetail from "./components/classwork_exercise/PostDetail";
import Home from "./components/homework_exercise_1/pages/Home";
import NotFound from "./components/homework_exercise_1/pages/NotFound";
import CountryDetail from "./components/homework_exercise_1/pages/CountryDetail";

function App() {

  return (
    <>
    <Routes>
      {/* Classwork exercise: Display and Detail View for Posts */}
      {/* <Route path="/posts" element={<PostsList />} />
      <Route path="/post/:id" element={<PostDetail />} /> */}

      {/* Homework exercise: Country Cards and Detail Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App
