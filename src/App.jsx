import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ImageGallery from './components/ImageGallery';
import './index.css'; // or './App.css'


const App = () => {
  return (
    <Provider store={store}>
      <div className='bg-white '>
        <h1 className='text-4xl mb-[50px] text-center'>Infinite Scroll Gallery</h1>
        <ImageGallery />
      </div>
    </Provider>
  );
};

export default App;
