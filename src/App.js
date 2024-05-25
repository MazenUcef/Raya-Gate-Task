import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import PostList from './components/PostList';

const App = () => {
  
  return (
    <div>
      <Header/>
      <PostList/>
    </div>
  )
}

export default App


