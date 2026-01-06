import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './features/product-image/MainLayout';

const App: React.FC = () => {
  // Set a consistent background color for the app
  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff'; // plain white
  }, []);

  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default App;
