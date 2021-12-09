// DO NOT DELETE
import React, { useState } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */



export const App = () => {
  const [dogUrl, setDogUrl] 
  = useState(<img src="https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1866.jpg" />);

    return (
      <div>
        <header> 
        <h1>Orginal Dogアプリ</h1>
      </header>
      <p>犬の画像紹介サイトです！！</p>
        { dogUrl }
        { setDogUrl }
      </div>
);
}

