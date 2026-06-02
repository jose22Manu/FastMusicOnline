import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {






  return (


    <div className='Contenedor'>

<label htmlFor="SubirCancion" className="btn-cargar">
  Cargar música
</label>

<input
  type="file"
  id="SubirCancion"
  accept=".mp3"
  name="SubirCancion"
  style={{ display: 'none' }}
/>


    <section className='songsList'></section>
     
    
      

  

    </div>
      
  )
}

export default App
