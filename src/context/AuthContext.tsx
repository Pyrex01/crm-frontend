import { createContext, useContext, useState } from "react";
import { LoginUserDetail } from "../Network/user-data";
import { netInstance } from "../Network/api-handler";

const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const login = (userData: LoginUserDetail) => {
    localStorage.setItem("token", userData.token);
    localStorage.setItem("firstname", userData.firstName);
    localStorage.setItem("lastname", userData.lastName);
    localStorage.setItem("id", userData.id);
    localStorage.setItem("username", userData.username);
    setUser(userData.username);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    setUser("");
  };

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const username = localStorage.getItem("username");
      setUser(username);
      netInstance.defaults.headers.common["Authorization"] = `bearer ${token}`;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        checkLogin,
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
