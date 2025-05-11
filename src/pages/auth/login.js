import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLogIn from "../../components/NavbarLogIn";
import "./login.css";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate = useNavigate();

	const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3500/api/usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                contraseña: password
            }),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json()
        localStorage.setItem("token", result.token)
        localStorage.setItem("role", result.role)
        localStorage.setItem("email", result.email)

        navigate("/home")
    };

	return (
        <>
        <NavbarLogIn />
		<div className="login-page">
			<form
				onSubmit={handleSubmit}
				className="login-form"
			>
				<h2 className="login-title">
					Iniciar Sesión
				</h2>

				<div className="login-email">
					
					<input
						id="email"
						type="email"
                        placeholder="Correo electrónico"
						className="login-input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className="login-password">
					<input
						id="password"
						type="password"
                        placeholder="Contraseña"
						className="login-input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<button
					type="submit"
					className="login-submit"
				>
					Iniciar sesión
				</button>
			</form>
		</div>
        </>
	);
}

