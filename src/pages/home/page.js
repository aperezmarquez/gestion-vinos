import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

const Home = () => {
    const [isLogInOpen, setIsLogInOpen] = useState(true);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        contraseña: "",
    });
    const [registerData, setRegisterData] = useState({
        email: "",
        contraseña: "",
        role: "user",
    });

    const navigate = useNavigate();

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
            
            if (result === true) {
                setIsLogInOpen(false)
            }
        }

        if (token) {
            checkToken()
        }
    }, [])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Actualiza el campo correspondiente
        });
    };

    const handleChangeRegister = (e) => {
        const { name, value } = e.target
        setRegisterData({
            ...registerData,
            [name]: value
        })
    }

    const toggleRegister = () => {
        setIsRegisterOpen(!isRegisterOpen);
        setIsLogInOpen(!isLogInOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3500/api/usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                contraseña: formData.contraseña
            }),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json()
        localStorage.setItem("token", result.token)
        localStorage.setItem("role", result.role)
        localStorage.setItem("email", result.email)

        navigate("/pedidos")
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3500/api/usuarios/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: registerData.email,
                contraseña: registerData.contraseña,
                role: registerData.role
            }),
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json()
        localStorage.setItem("token", result.token)
        localStorage.setItem("role", result.role)
        localStorage.setItem("email", result.email)

        navigate("/pedidos")
    };

    return (
        <>
            <Navbar></Navbar>
            <div>Home</div>
            {isLogInOpen && (
                <div className="popup-overlay">
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>LogIn</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="contraseña">Contraseña:</label>
                                <input
                                    type="password"
                                    id="contraseña"
                                    name="contraseña"
                                    value={formData.contraseña}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                        <button onClick={toggleRegister}>Register</button>
                    </div>
                </div>
            )}
            {isRegisterOpen && (
                <div className="popup-overlay">
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Register</h2>
                        <form onSubmit={handleSubmitRegister}>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={registerData.email}
                                    onChange={handleChangeRegister}
                                />
                            </div>
                            <div>
                                <label htmlFor="contraseña">Contraseña:</label>
                                <input 
                                    type="password"
                                    id="contraseña"
                                    name="contraseña"
                                    value={registerData.contraseña}
                                    onChange={handleChangeRegister}
                                />
                            </div>
                            <button type="submit">Enviar</button>
                        </form> 
                        <button onClick={toggleRegister}>LogIn</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
