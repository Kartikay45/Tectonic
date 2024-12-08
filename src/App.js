// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Lookbook from "./components/Lookbook";
// import ProductDetail from "./components/ProductDetail";
// import GlobalStyle from "./styles/GlobalStyle";

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Routes>
//         <Route path="/" element={<Lookbook />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// /src/App.js




import React from 'react';
import Lookbook from './components/Lookbook';


const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Lookbook />
    </div>
  );
};

export default App;