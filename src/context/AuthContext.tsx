import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
function AuthProvider({ children }) {
	const [user, setUser] = useState("");

	const login = (name: string) => {
		localStorage.setItem("user", name);
		setUser(name);
	};

	const logout = () => {
		localStorage.removeItem("user");
		setUser("");
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("Cant use cities context outside cities provider");
	}
	return context;
}

export { AuthProvider, useAuth };
