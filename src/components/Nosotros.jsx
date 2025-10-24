import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Nosotros(){
    return (
        <div>
            <div className="text-center">
                <h3>Nosotros</h3>
                <div className="container my-5">

        <section className="row mb-5 py-4 border-bottom">
            <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="p-4 bg-light rounded-3 h-100 shadow-sm">
                    <i className="feature-icon bi bi-flag-fill d-block mb-3"></i> <h2>Misión</h2>
                    <p className="fs-5">
                        En Camisetas Gonza buscamos transmitir la pasión por el fútbol a través de cada prenda.
                        Nuestra misión es conectar a los verdaderos fanáticos con camisetas únicas, auténticas y llenas de historia. Queremos que cada cliente sienta el orgullo, la emoción y el sentido de pertenencia que despierta vestir los colores de su equipo o selección favorita.    
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="p-4 bg-light rounded-3 h-100 shadow-sm">
                    <i className="feature-icon bi bi-eye-fill d-block mb-3"></i> <h2>Visión</h2>
                    <p className="fs-5">Ser la tienda de referencia para los amantes del fútbol, reconocida por ofrecer productos originales, atención personalizada y una experiencia de compra que refleje la esencia del deporte más hermoso del mundo.
                                        Aspiramos a crecer con nuestros clientes, expandiendo nuestra colección y generando una comunidad que viva el fútbol con la misma pasión que nosotros.
                    </p>
                </div>
            </div>
        </section>

        <section className="mb-5">
            <h2>Camisetas Gonza: Origen y Desarrollo</h2>
            <div className="row align-items-center">
                <div className="row align-items-center col-lg-6">
                    <p className="lead">
                        Camisetas Gonza nació del amor incondicional por el fútbol.
                        Comenzamos como un pequeño proyecto entre hinchas que buscaban camisetas difíciles de conseguir, y con el tiempo, ese hobby se transformó en una marca que representa autenticidad, dedicación y respeto por la historia del fútbol.
                        Hoy seguimos creciendo, manteniendo la cercanía con nuestros clientes y el compromiso con la calidad que nos distingue desde el primer día.
                    </p>
                </div>
                <div className="col-md-5 text-center">
                    <img src="https://picsum.photos/600/400?random=1" className="img-fluid rounded shadow-lg" alt="Ilustración del equipo"/></div>
            </div>
        </section>

        <section className="text-center mb-5">
            <h2>Valores que nos Impulsan</h2>
            <div className="row g-4">
                
                <div className="col-md-5 col-lg-2">
                    <div className="card p-3 h-10 shadow">
                        <i className="feature-icon bi bi-lightbulb-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Pasión</h4>
                        <p className="card-text">Cada camiseta cuenta una historia, y nosotros vivimos cada una de ellas.</p>
                    </div>
                </div>

                <div className="col-md-10 col-lg-3">
                    <div className="card p-3 h-10 shadow">
                        <i className="feature-icon bi bi-shield-lock-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Autenticidad </h4>
                        <p className="card-text">Trabajamos con productos originales, fieles a los colores y símbolos de cada club.</p>
                    </div>
                </div>

                <div className="col-md-5 col-lg-3">
                    <div className="card p-3 h-10 shadow">
                        <i className="feature-icon bi bi-people-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Compromiso</h4>
                        <p className="card-text">Brindamos atención personalizada y una experiencia de compra segura.</p>
                    </div>
                </div>
                
                <div className="col-md-5 col-lg-2">
                    <div className="card p-3 h-10 shadow">
                        <i className="feature-icon bi bi-hand-thumbs-up-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Respeto</h4>
                        <p className="card-text">Valoramos a cada hincha y su historia que representa su camiseta.</p>
                    </div>
                </div>

                <div className="col-md-7 col-lg-2">
                    <div className="card p-3 h-10 shadow">
                        <i className="feature-icon bi bi-hand-thumbs-up-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Excelencia</h4>
                        <p className="card-text">Buscamos mejorar constantemente, ofreciendo calidad en cada detalle.</p>
                    </div>
                </div>


            </div>
        </section>
        
    </div>
            </div> 
        </div>
    );
}
export default Nosotros;