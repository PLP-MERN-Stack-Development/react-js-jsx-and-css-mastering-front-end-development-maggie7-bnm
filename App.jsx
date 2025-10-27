import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Tasks from './Pages/Tasks';
import ApiData from './Pages/Apidata';

function App() {
  return (
    // ✅ ThemeProvider wraps everything so any component can use the theme
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/api-data" element={<ApiData />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
