
import './App.css';
// Import dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';



function App() {
  return (
    <>
      <BrowserRouter>

      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </section>
      </main>
      <footer>
        &copy; Jonathan Hirsch 2023
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
