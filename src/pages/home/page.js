import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

const Home = () => {
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

    return (
        <>
            <Navbar></Navbar>
            <div>Home</div> 
        </>
    );
};

export default Home;
