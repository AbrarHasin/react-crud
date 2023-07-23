import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed import statement
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';
import Main from './main/Main';
import Products from './admin/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/create" element={<ProductsCreate />} />
          <Route path="/admin/products/:id/edit" element={<ProductsEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;