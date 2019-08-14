import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import Contact from './components/Contact';
import Post from './components/Post';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/contact" component={Contact} />
        <Route path="/:post_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
