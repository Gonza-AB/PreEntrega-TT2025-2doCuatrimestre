import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Productos from "./components/Productos";
import Infaltables from "./components/Infaltables";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Administracion from "./components/Administracion";
import Dashboard from "./components/Dashboard";
import Carrito from "./components/Carrito";
import PrivateRoute from "./components/PrivateRoute";
import CrudProductos from './components/CrudProductos';
import Checkout from './components/Checkout';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <Router>
      <Header />
      <ToastContainer position="top-right" autoClose={3000} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/infaltables" element={<Infaltables />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />


        {/* RUTAS PROTEGIDAS */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Administracion />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

        <Route
          path="/crud"
          element={
            <PrivateRoute>
              <CrudProductos />
            </PrivateRoute>
          }     
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
