// import React, { useState } from 'react';
// import LookPreview from './LookPreview';
// import { LookbookContainer } from '../styles/LookbookStyle';

// const Lookbook = () => {
//   const looks = [
//     {
//       id: 1,
//       media: [
//         { type: 'image', src: 'image1.jpg', products: [{ id: 1, name: 'Shirt' }, { id: 2, name: 'Pants' }] },
//         { type: 'video', src: 'video1.mp4', products: [{ id: 1, name: 'Shirt' }] },
//       ],
//     },
//     // More looks here
//   ];

//   return (
//     <LookbookContainer>
//       {looks.map((look) => (
//         <LookPreview key={look.id} look={look} />
//       ))}
//     </LookbookContainer>
//   );
// };

// export default Lookbook;

// /src/components/Lookbook.js

import React, { useState, useRef } from 'react';
import { FaHeart, FaComment, FaShare, FaBookmark } from 'react-icons/fa';
import { BsHandbag } from 'react-icons/bs';

// Sample data with 3 pictures
const REELS_DATA = [
  {
    id: 1,
    creator: {
      username: "fashion_style",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
    media: {
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=640',
    },
    products: [
      {
        id: 'p1',
        x: 45,
        y: 30,
        name: 'Summer Floral Dress',
        price: 89.99,
        brand: 'Fashion Nova',
        thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200'
      }
    ],
    likes: '124.5K',
    caption: "Summer vibes 🌸 #fashion"
  },
  {
    id: 2,
    creator: {
      username: "style_queen",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100",
    },
    media: {
      url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=640',
    },
    products: [
      {
        id: 'p2',
        x: 50,
        y: 40,
        name: 'Classic Blazer',
        price: 149.99,
        brand: 'Urban Style',
        thumbnail: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200'
      }
    ],
    likes: '89.2K',
    caption: "Business casual 💼 #workwear"
  },
  {
    id: 3,
    creator: {
      username: "trendsetter",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100",
    },
    media: {
      url: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=640',
    },
    products: [
      {
        id: 'p3',
        x: 55,
        y: 45,
        name: 'Winter Coat',
        price: 199.99,
        brand: 'Winter Luxe',
        thumbnail: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=200'
      }
    ],
    likes: '92.1K',
    caption: "Winter ready ❄️ #winterfashion"
  }
];

const ProductTag = ({ product, isActive, onClick }) => (
  <div className="absolute z-20" style={{ left: `${product.x}%`, top: `${product.y}%` }}>
    <div className="absolute w-12 h-12 -left-6 -top-6">
      <div className="absolute inset-0 border-2 border-white rounded-full animate-ping opacity-75"></div>
      <div className="absolute inset-0 border-2 border-white rounded-full"></div>
    </div>
    
    <button
      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full transform -translate-x-1/2 -translate-y-1/2
                 flex items-center justify-center border-2 border-white hover:scale-110 transition-transform"
      onClick={onClick}
    >
      <BsHandbag className="w-4 h-4 text-black" />
    </button>
    
    {isActive && (
      <div className="absolute left-1/2 bottom-full mb-2 w-64 -translate-x-1/2 bg-white/90 backdrop-blur-sm 
                      rounded-lg overflow-hidden shadow-xl border border-white/50 transition-all duration-200">
        <div className="flex p-3">
          <img src={product.thumbnail} alt="" className="w-20 h-20 object-cover rounded" />
          <div className="ml-3 flex-1">
            <h3 className="text-black text-sm font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-xs">{product.brand}</p>
            <p className="text-black font-bold mt-2">${product.price}</p>
          </div>
        </div>
        <button className="w-full bg-black text-white text-sm font-semibold py-2.5 hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </div>
    )}
  </div>
);

const Reel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
  const [likes, setLikes] = useState({});
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const newIndex = Math.round(scrollTop / clientHeight);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        setActiveProduct(null);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      onScroll={handleScroll}
    >
      {REELS_DATA.map((reel, index) => (
        <div key={reel.id} className="h-screen w-full relative snap-start flex items-center justify-center">
          {/* Main content */}
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src={reel.media.url}
                alt=""
                className="h-full w-full object-contain"
              />
              {/* Product tags */}
              {reel.products.map(product => (
                <ProductTag
                  key={product.id}
                  product={product}
                  isActive={activeProduct === product.id}
                  onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
                />
              ))}
            </div>
          </div>

          {/* Creator info - centered */}
          <div className="absolute top-4 left-0 right-0 px-4 flex items-center justify-center">
            <img 
              src={reel.creator.avatar}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <span className="ml-2 text-white font-medium">{reel.creator.username}</span>
            <button className="ml-2 px-3 py-1 text-white text-sm border border-white rounded-md">
              Follow
            </button>
          </div>

          {/* Caption - centered */}
          <div className="absolute bottom-20 left-0 right-0 px-4 text-center">
            <p className="text-white text-sm">
              <span className="font-bold">{reel.creator.username}</span>
              {' '}{reel.caption}
            </p>
          </div>

          {/* Right sidebar - moved slightly inward */}
          <div className="absolute right-8 bottom-20 flex flex-col items-center space-y-6">
            <button 
              className="text-white flex flex-col items-center"
              onClick={() => setLikes(prev => ({ ...prev, [reel.id]: !prev[reel.id] }))}
            >
              <FaHeart 
                size={28} 
                className={likes[reel.id] ? "text-red-500" : "text-white"} 
              />
              <span className="text-xs mt-1">{reel.likes}</span>
            </button>
            <button className="text-white">
              <FaComment size={28} />
            </button>
            <button className="text-white">
              <FaShare size={28} />
            </button>
            <button className="text-white">
              <FaBookmark size={28} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reel;