import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components

import Home from './components/Home';
import { MiContador } from './components/MiContador';

let contador = 0

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MiContador
  numUnidades="0"
  
    numDecenas="0"
    numCentenas="0"
    numMil="0"
    numDiezMil="0"
    numCienMil="0"
/>);

setInterval(() => {
  contador++

  let unidades = Math.floor(contador % 10)
  let decenas = Math.floor((contador / 10) % 10)
  let centenas = Math.floor((contador / 100) % 10)
  let mil = Math.floor((contador / 1000) % 10)
  let diezMil = Math.floor((contador / 10000) % 10)
  let cienMil = Math.floor((contador / 100000) % 10)

  root.render(<MiContador
    numUnidades={unidades}
    numDecenas={decenas}
    numCentenas={centenas}
    numMil={mil}
    numDiezMil={diezMil}
    numCienMil={cienMil}
  />)
}, 1000)

