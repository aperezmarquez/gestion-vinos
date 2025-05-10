import React, { useState } from "react";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Inicio de sesión:", { email, password });
		// Aquí podrías llamar a tu API de autenticación
	};

	return (
		<div className="h-screen w-screen flex items-center justify-center bg-white">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
			>
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Iniciar sesión
				</h2>

				<div className="mb-4">
					<label className="block text-gray-700 mb-1" htmlFor="email">
						Correo electrónico
					</label>
					<input
						id="email"
						type="email"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className="mb-6">
					<label className="block text-gray-700 mb-1" htmlFor="password">
						Contraseña
					</label>
					<input
						id="password"
						type="password"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
				>
					Iniciar sesión
				</button>
			</form>
		</div>
	);
}

