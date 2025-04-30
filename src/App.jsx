import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Mainpage } from './screens/Mainpage/Mainpage';
import BlogPage from './BlogPage/BlogPage';
import Categories from './Categories/src/screens/Categories/sections/Categories';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white w-full">
      <Routes>
          <Route index element={<Mainpage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="categories" element={<Categories />} />
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App; 