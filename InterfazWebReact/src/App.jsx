import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import reactLogo from './assets/react.svg';
import NavbarComponent from './NavbarComponent'; // Importamos el Navbar
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* Navbar agregado */}
        <NavbarComponent />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Botón nuevo con BootstrapMarcos */}
      <div className="container mt-5">
        <h1>¡Hola, Bootstrap en Vite!</h1>
        <Button variant="primary">Click me</Button>
      </div>
    </>

  )
}

export default App
