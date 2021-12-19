// DO NOT DELETE
import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/setter-english/n02100735_3942.jpg",
  )
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const Reload = () => {
    setIsLoading(false)
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(true)
          setDogUrl(result.message)
        },
        err => {
          setIsLoading(true)
          setError(err)
        },
      )
  }

  if (!isLoading) {
    return <div>...Loading</div>
  } else if (error) {
    return <div>Error: {error.message}</div>
  } else {
    return (
      <div>
        <header> 
        	<h1>Orginal Dogアプリ</h1>
      	</header>
    	<p>犬の画像紹介サイトです！！</p>
        <body>
          <p>犬の画像を表示するサイトです</p>
          <img src={dogUrl} />
          <p><button onClick={() => Reload()}>Click Me</button></p>
        </body>
      </div>
    )
  }
}