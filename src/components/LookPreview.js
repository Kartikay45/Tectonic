// import React, { useState } from 'react';
// import Annotations from './Annotations';
// import VideoPlayer from './VideoPlayer';

// const LookPreview = ({ look }) => {
//   const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
//   const currentMedia = look.media[currentMediaIndex];

//   const handleNext = () => {
//     setCurrentMediaIndex((prev) => (prev + 1) % look.media.length);
//   };

//   const handlePrev = () => {
//     setCurrentMediaIndex((prev) => (prev - 1 + look.media.length) % look.media.length);
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handlePrev}>Prev</button>
//         <button onClick={handleNext}>Next</button>
//       </div>

//       {currentMedia.type === 'image' ? (
//         <div>
//           <img src={currentMedia.src} alt="Look" />
//           <Annotations products={currentMedia.products} />
//         </div>
//       ) : (
//         <VideoPlayer src={currentMedia.src} />
//       )}
//     </div>
//   );
// };

// export default LookPreview;


// /src/components/LookPreview.js

import React from 'react';
import Annotations from './Annotations';
import VideoPlayer from './VideoPlayer';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';

const LookPreview = ({
  look,
  mediaIndex,
  handleNextMedia,
  handlePrevMedia,
  handleNextLook,
  handlePrevLook,
  setSelectedProduct
}) => {
  const currentMedia = look.media[mediaIndex];

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {currentMedia.type === 'image' ? (
        <div className="relative w-full h-full">
          <img 
            src={currentMedia.url} 
            alt="Look" 
            className="w-full h-full object-cover"
          />
          <Annotations
            products={currentMedia.products}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      ) : (
        <VideoPlayer videoUrl={currentMedia.url} />
      )}

      {/* Navigation Controls */}
      <div className="absolute top-1/2 w-full flex justify-between px-4">
        <button onClick={handlePrevMedia} className="bg-black/50 p-2 rounded-full">
          <FaChevronLeft color="white" /> {/* Use FaChevronLeft from react-icons */}
        </button>
        <button onClick={handleNextMedia} className="bg-black/50 p-2 rounded-full">
          <FaChevronRight color="white" /> {/* Use FaChevronRight from react-icons */}
        </button>
      </div>

      {/* Look Navigation (optional, add if needed for look navigation) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button onClick={handlePrevLook} className="bg-black/50 p-2 rounded-full">
          <FaChevronLeft color="white" />
        </button>
        <button onClick={handleNextLook} className="bg-black/50 p-2 rounded-full">
          <FaChevronRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default LookPreview;

