import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardLink from "../../components/CardLink";
import HomeButton from "../../components/HomeButton";
import './home.css';

const Home = () => {
    const [role, setRole] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        setRole(role)
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function checkToken() {
            const response = await fetch("http://localhost:3500/api/usuarios/checkToken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token
                }),
            })
        
            if (!response.ok) {
                localStorage.clear()
            }
            const result = await response.json()
        }

        if (token) {
            checkToken()
        }
    }, []) 

    return (
        <>
            <Navbar></Navbar>
            <div className="home-container">
                <section className="home-top-section">
                    <CardLink name="Productos" url="/productos" img_url="/vinoteca.jpeg" />
                    <CardLink name="Pedidos" url="/pedidos" img_url="/pedido.jpg" />
                    <div className="home-buttons">
                        <p className="home-buttons-title">Otros</p>
                        <HomeButton name="Clientes" url="/clientes" />
                        {role === 'admin' && (
                            <HomeButton name="Empleados" url="/empleados" />   
                        )}
                    </div>
                </section>
                <section className="home-bottom-section">
                
                </section>
            </div> 
        </>
    );
};

export default Home;
