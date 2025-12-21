import { Container } from "react-bootstrap";
import CrudProductos from "./CrudProductos";

export default function Administracion() {
    return (
        <Container className="mt-4">
        <h2>Panel de Administración</h2>
        <p>Acceso exclusivo para usuarios autenticados.</p>

        <CrudProductos />
        </Container>
    );
}
