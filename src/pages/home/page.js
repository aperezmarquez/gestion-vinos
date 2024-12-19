import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import './home.css';

const Home = () => {
    const [isLogInOpen, setIsLogInOpen] = useState(true);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        contraseña: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Actualiza el campo correspondiente
        });
    };

    const toggleRegister = () => {
        setIsRegisterOpen(!isRegisterOpen);
        setIsLogInOpen(!isLogInOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
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
                        
                        <button onClick={toggleRegister}>LogIn</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
