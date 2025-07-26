import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsDetail from './components/NewsDetail';
import NewsCard from './components/NewsCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsCard />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
