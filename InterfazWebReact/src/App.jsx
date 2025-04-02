import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './styles/App.css';
import reactLogo from './assets/react.svg';
import NavbarComponent from './layouts/NavbarComponent';
import viteLogo from '/vite.svg';
import { Spinner, Card } from "react-bootstrap";

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
      
      {/* Muestra un spinner animado de Bootstrap - Ana */}
      <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: "20rem", textAlign: "center", padding: "20px" }}>
        <Spinner animation="border" variant="primary" />
        <h5 className="mt-3">Cargando información...</h5>
        <p className="text-muted">Por favor, espera un momento.</p>
      </Card>
    </div>
    </>

  )
}

export default App
