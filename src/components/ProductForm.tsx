import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewProduct, updateExistingProduct } from '../features/products/productSlice';
import { AppDispatch } from '../store';

interface ProductFormProps {
  product?: any;
  editMode?: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, editMode = false }) => {
  const dispatch: AppDispatch = useDispatch();
  const [productName, setProductName] = useState(product?.product_name || '');
  const [category, setCategory] = useState(product?.category || '');
  const [price, setPrice] = useState(product?.price || 0);
  const [discount, setDiscount] = useState(product?.discount || 0);

  const handleSubmit = () => {
    const newProduct = { product_name: productName, category, price, discount };

    if (editMode) {
      dispatch(updateExistingProduct({ id: product.id, product: newProduct }));
    } else {
      dispatch(createNewProduct(newProduct));
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <h2 className="text-2xl font-bold mb-4">{editMode ? 'Edit Product' : 'Add New Product'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Discount</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Discount"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        {editMode ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
