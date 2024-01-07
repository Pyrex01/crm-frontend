import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import { AuthProvider } from "./context/AuthContext";
import Hero from "./components/Hero";
import CustomerDetail from "./components/CustomerDetail";
export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Root/>}>
						<Route path="/" element={<Hero />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/form" element={<Form />} />
						<Route path="/customer/:id" element={<CustomerDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
