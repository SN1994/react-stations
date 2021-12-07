// DO NOT DELETE
import React, { useState } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */

 function Dog() {

  const [dogUrl, setDogUrl] 
  = useState(<img src="https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1866.jpg" />);

  return (
      <div>
        { dogUrl }
        { setDogUrl }
      </div>
);
}

export const App = () => {
    return ( 
    <div>
      <header> 
        <h1>Orginal Dogアプリ</h1>
      </header>
          <p>犬の画像紹介サイトです！！</p>
          <img src="https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1866.jpg" />
    </div>
    );
}