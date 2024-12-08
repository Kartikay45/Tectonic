import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white z-50 p-4 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="text-black"
        >
          ← Back
        </button>
        <h1 className="ml-4 font-bold">Product Details</h1>
      </div>
      <div className="pt-16 p-4">
        <h2>Product ID: {id}</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
