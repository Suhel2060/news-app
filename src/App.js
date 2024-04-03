import './App.css';

import React from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  const [progress, updateProgress] = useState(0)

  const setProgress=(progress)=>{
    updateProgress(progress)
  }
  const pageSize=9;

  // getting api key from the .env.local using enviroment varialble
 const apiKey=process.env.REACT_APP_NEWS_API

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}

      />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize}country="in"catagory="general"/>}></Route>
         <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize}country="in"catagory="business"/>}></Route>
         <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize}country="in"catagory="entertainment"/>}>entertainment</Route>
         <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize}country="in"catagory="general"/>}>general</Route>
         <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize}country="in"catagory="health"/>}>health</Route>
         <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize}country="in"catagory="science"/>}>science</Route>
         <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize}country="in"catagory="sports"/>}>sports</Route>
         <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize}country="in"catagory="technology"/>}>technology</Route>
        </Routes>
        </Router>
      </div>
    )
}

