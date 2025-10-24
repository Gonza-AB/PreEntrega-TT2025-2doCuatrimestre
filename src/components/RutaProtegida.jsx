<<<<<<< HEAD
import {Navigate} from "react-router-dom";

export default function RutaProtegida({children}){
    const auth=localStorage.getItem('auth')==='true';
    return auth ? children: <Navigate to="/login"/> // Ruta protegida, emulacion de token
=======
import {Navigate} from "react-router-dom";

export default function RutaProtegida({children}){
    const auth=localStorage.getItem('auth')==='true';
    return auth ? children: <Navigate to="/login"/> // Ruta protegida, emulacion de token
>>>>>>> 1656d356019e855c884dddb6a28158285155201f
}