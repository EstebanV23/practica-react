import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    enabled && window.addEventListener('pointermove', handleMove) // Si esta en enabled se suscribirá a el evento

    // Se ejecuta al principio, cuando se monta o desmonta el componente, y al cambiar su dependencia que en este caso es el enabled
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(0, 0, 0, 0.5)',
        border: '1px solid white',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h1>Mouse Follow</h1>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} Seguir puntero</button>
    </>
  )
}

export default App
