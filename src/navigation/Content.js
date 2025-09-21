import React, {Component} from 'react';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Projects from '../pages/Projects';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';

class Content extends Component {
  render () {
    return (
      <Routes className="content-holder">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    )
  }
}

export default Content
