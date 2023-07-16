"use client";
import { useAuth } from "@/hooks";
import { Button } from "semantic-ui-react";

export default function Home() {
	const { user, logout, updateUser } = useAuth();

	const updateUserDemo = () => {
		updateUser("username", "pepe");
	};

	return (
		<div>
			<h2>Home</h2>

			{user ? (
				<div>
					<p>
						Hola {user?.firstname} {user?.lastname}
					</p>
					<Button onClick={logout}> Cerrar Sesion</Button>
					<Button onClick={updateUserDemo}> Update User</Button>
				</div>
			) : (
				<div>
					<a href='/join/sing-in'>Iniciar Sesion</a>
				</div>
			)}
		</div>
	);
}
