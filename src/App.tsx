import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Product Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ProductForm />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
