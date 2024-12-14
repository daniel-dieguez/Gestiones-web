import React from 'react'
import Forms from './components/Forms'
import  style from './style/start.module.css';


export default function App() {
  return (
    <div className={style.body}>
    <h1 className={style.h1}>Comité Olímpico Guatemalteco</h1>
    <hr />
    <Forms />
    <hr />
    <footer className={style.footer}>
        <p>© 2024 Comité Olímpico Guatemalteco. Todos los derechos reservados.</p>
    </footer>
        
    </div>
  )
}
