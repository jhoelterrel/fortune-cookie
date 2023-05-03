import { useState } from 'react'
import './App.css'
import Message from './components/Message'
import phrases from './data/phrases.json'

function App() {

  const [ index,setIndex ] = useState(0)

  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595", "#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B"]

  const imagen = ["fondo1.jpg","fondo2.jpg","fondo3.jpg","fondo4.jpg","fondo5.jpg","fondo6.jpg","fondo7.jpg","fondo8.jpg","fondo2.jpg","fondo3.jpg","fondo4.jpg","fondo5.jpg","fondo6.jpg","fondo7.jpg","fondo8.jpg"]

  document.body.style = `background: lightblue url("./imagenes/${imagen[index]}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; `;
  

  const changeIndex = () => {
    if(index < phrases.length - 1)
     setIndex(Math.floor((Math.random())* phrases.length))
    else{
      setIndex(0)
    }
  }

  return (
    <>
    <div className='card'>
    <Message
    data={phrases[index]}
    color={colors[index]}
    />
    <div className='container-btn'>
    <button
    onClick={() => changeIndex()}
    >
      Tendre Suerte hoy!
    </button>
    </div>
    </div>
    </>
  )
}

export default App
