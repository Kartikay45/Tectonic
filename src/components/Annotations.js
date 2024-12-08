// import React from 'react';

// const Annotations = ({ products }) => {
//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id} className="annotation">
//           <span>{product.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Annotations;


// /src/components/Annotations.js

import React from 'react';

const ProductAnnotation = ({ product, isActive, onClick }) => {
  const annotationStyles = {
    dot: `w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center
          transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
          hover:scale-110 transition-transform duration-200`,
    pulse: `absolute -inset-2 bg-white/30 rounded-full animate-pulse`,
    line: `absolute h-px bg-white/50 transform origin-left
           ${isActive ? 'w-20' : 'w-0'} transition-all duration-300`,
    label: `absolute left-full ml-3 whitespace-nowrap bg-black/75 px-2 py-1 rounded
            text-white text-xs transform -translate-y-1/2
            ${isActive ? 'opacity-100' : 'opacity-0'} transition-all duration-300`
  };

  return (
    <div 
      className="absolute z-20 group" 
      style={{ left: `${product.x}%`, top: `${product.y}%` }}
    >
      {/* Connecting line */}
      <div className={annotationStyles.line} />
      
      {/* Pulsing effect */}
      <div className={annotationStyles.pulse} />
      
      {/* Main dot */}
      <button
        className={annotationStyles.dot}
        onClick={onClick}
      >
        <span className="text-xs font-bold text-black">+</span>
      </button>

      {/* Quick label */}
      <div className={annotationStyles.label}>
        {product.name} - ${product.price}
      </div>
      
      {/* Detailed product card */}
      {isActive && (
        <div className="absolute left-1/2 bottom-full mb-4 w-64 -translate-x-1/2 
                      bg-white rounded-lg shadow-xl overflow-hidden z-30">
          <div className="relative">
            <img 
              src={product.thumbnail} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <p className="font-bold">{product.name}</p>
              <p className="text-sm opacity-90">{product.brand}</p>
            </div>
          </div>
          <div className="p-3 bg-white">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-lg">${product.price}</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {product.category}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            {product.colors && (
              <div className="flex space-x-2 mb-3">
                {product.colors.map(color => (
                  <div 
                    key={color}
                    className="w-6 h-6 rounded-full border-2 border-white shadow"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
            {product.sizes && (
              <div className="flex flex-wrap gap-2 mb-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className="px-2 py-1 text-xs border rounded-md hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
            <button className="w-full mt-3 bg-black text-white py-2 rounded-md
                             hover:bg-gray-800 transition-colors duration-200">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Sample product data structure
const sampleProduct = {
  id: 'p1',
  x: 45,
  y: 30,
  name: 'Summer Floral Dress',
  price: 89.99,
  brand: 'Fashion Nova',
  thumbnail: 'path/to/image.jpg',
  category: 'Dresses',
  description: 'Light and breezy floral dress perfect for summer days.',
  colors: ['#FFE4E1', '#E6E6FA', '#F0F8FF'],
  sizes: ['XS', 'S', 'M', 'L', 'XL']
};

export { ProductAnnotation, sampleProduct };