import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import './App.css';
import NavbarComponent from './layouts/NavbarComponent.jsx'; // Importamos el Navbar

function App() {
  return (

      <div className="app-main">
           {/*##############################################
           #################################################
                              IMPORTANTE
           ¡¡No cambiar los nombres de las clases(className)
           como por ejemplo: container, row, col. Por que
           se van a perder los estilos de Bootstrap.!!!!!
           ################################################
           ################################################*/}
            {/* Navbar |JACKSPARROW*/}
            <NavbarComponent />

            {/* Container para controlar el ancho del contenido */}
            <div className="container">
              {/* Tagline |ANABANANA*/}
              <div className="row my-4">
                <div className="col-12">
                    {/* REEMPLAZAR POR EL COMPONENTE */}
                </div>
              </div>

              {/* Carousel |MONKITOS */}
              <div className="row mb-5 carousel-section">
                <div className="col-12">
                  <CarouselComponent />
                </div>
              </div>

            </div>

          </div>
  )
}

export default App
