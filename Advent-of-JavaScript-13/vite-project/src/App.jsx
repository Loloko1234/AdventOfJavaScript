import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [popup, setPopup] = useState(false)
  const menu = () => {
    setPopup(!popup)
    if(popup){
      
    }
  }
  return (
<div className="wrapper">
    <svg viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <image href="./bg.jpg" width="1440" height="1024" />
      <a href="#" id="something" onClick={menu}>
        <circle className="dot" cx="136.5" cy="113.5" r="17.5" id="elgato-keylight" />
        <circle id="my-circle" cx="136.5" cy="113.5" r="22" stroke="#F41E82" stroke-width="6px" opacity="0" />
      </a>
    </svg>

    <div className={popup ? 'overlay' : 'overlayb'}>
      <div className={popup ? 'modal show' : 'modal hidden'}>
      <button className="close" onClick={menu}>
          <img src="./close.svg" alt="Close" />
        </button>

        <div className="content">
          <h1>Elgato Key Lights</h1>
          <div className="description">
            <p>
              These lights are great if you shoot video at your desk.
            </p>
            <p>
              My desk is pushed up against the wall, so I didn’t have room for a large soft box. These lights still
              deliver on the
              look that I wanted. Plus, it comes with a desktop app where you can adjust the brightness and temperature.
            </p>
          </div>
          <a href="http://amazon.com" className="buy-now" target="_blank">
            BUY NOW for $169.99
          </a>
        </div>

        <div className="product-image">
          <img src="./elgato-key-light.png" alt="Elgato Key Light" />
        </div>

      </div>
    </div>
  </div>
  )
}

export default App
