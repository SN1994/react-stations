// DO NOT DELETE
import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/setter-english/n02100735_3942.jpg",
  )

  const Reload = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          setDogUrl(result.message)
        },
      )
  }
    return (
      <div>
        <header> 
        	<h1>Orginal Dogアプリ</h1>
      	</header>
    	    <p>犬の画像紹介サイトです！！</p>
        <body>
          <img src={dogUrl} alt ="犬の画像"/>
          <p><button onClick={() => Reload()}>Click Me</button></p>
        </body>
      </div>
    )
  }