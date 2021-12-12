// DO NOT DELETE
import React, { useState } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] 
  = useState("https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1866.jpg");

    return (
      <div>
        <header> 
        <h1>Orginal Dogアプリ</h1>
      </header>
      <p>犬の画像紹介サイトです！！</p>
      <img src = {dogUrl} />
      <p><button onClick={() => 
        setDogUrl("https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg")}>
        Click me
      </button></p>
      </div>
);
}
