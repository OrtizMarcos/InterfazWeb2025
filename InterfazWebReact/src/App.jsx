import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import './styles/App.css';
import NavbarComponent from './layouts/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import MainComponent from './components/MainComponent';

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
            <div className="main-content">
                 {/* Tagline |ANABANANA*/}
                 <div className="col-12">
                    <MainComponent />
                 </div>
                  {/* Carousel | MONKITOS */}
                  <div className="carousel-full-width">
                      <CarouselComponent />
                  </div>
            </div>
      </div>
  )
}

export default App
