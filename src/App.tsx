import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';
import Main from './main/Main';
import Products from './admin/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/admin/products" exact component={Products} />
        <Route path="/admin/products/create" exact component={ProductsCreate} />
        <Route path="/admin/products/:id/edit" exact component={ProductsEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;