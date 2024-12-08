// import React, { useState } from 'react';

// const VideoPlayer = ({ src }) => {
//   const [isMuted, setIsMuted] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying((prev) => !prev);
//   };

//   return (
//     <div>
//       <video
//         src={src}
//         autoPlay={isPlaying}
//         muted={isMuted}
//         controls
//         style={{ width: '100%' }}
//       />
//       <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
//       <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
//     </div>
//   );
// };

// export default VideoPlayer;

// /src/components/VideoPlayer.js

import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';  // Import from react-icons/fa

const VideoPlayer = ({ videoUrl }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        loop
      />
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full"
      >
        {isMuted ? <FaVolumeMute color="white" /> : <FaVolumeUp color="white" />}
      </button>
    </div>
  );
};

export default VideoPlayer;

