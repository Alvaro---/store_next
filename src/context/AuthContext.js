"use client";
import { Token, User } from "@/api";
import { useState, useEffect, createContext } from "react";

const tokenCtrl = new Token();
const userCtrl = new User();
export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const token = tokenCtrl.getToken();
			if (!token) {
				logout();
				setLoading(false);
				return;
			}
			if (tokenCtrl.hasExpiredToken(token)) {
				logout();
			} else {
				await login(token);
			}
		})();
	}, []);

	const logout = () => {
		tokenCtrl.removeToken();
		setToken(null);
		setUser(null);
	};

	const login = async (token) => {
		try {
			tokenCtrl.setToken(token);
			const response = await userCtrl.getMe();
			setUser(response);
			setToken(token);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const updateUser = (key, value) => {
		setUser({
			...user,
			[key]: value,
		});
	};

	const data = {
		accessToken: token,
		user,
		updateUser,
		logout,
		login,
	};

	if (loading) return null;

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
