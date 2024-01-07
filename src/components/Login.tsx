import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LoginUserDetail, fetchUserToken } from "../Network/user-data";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const {login} = useAuth();
	const [username,setUsername] = useState("");
	const [password,setPassword] = useState("");
	const navigate = useNavigate();
	const loginUser=async()=>{
		const userData: LoginUserDetail = await fetchUserToken(username,password)
		if(userData){
			login(userData);
			navigate('/')
		}
	}
	return (
		<div className="bg-gray-400 flex items-center justify-center h-screen">
			<div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
				<h2 className="text-2xl font-semibold text-center mb-4">Login Page</h2>
				<p className="text-gray-600 text-center mb-6">Enter your credentials.</p>
				<form>
					<div className="mb-4">
						<label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
							Username *
						</label>
						<input
							type="text"
							id="username"
							className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
							required
							placeholder="warner01"
							value={username}
							onChange={e=>setUsername(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
							Password *
						</label>
						<input
							type="password"
							id="password"
							className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
							required
							placeholder="••••••••"
							value={password}
							onChange={e=>setPassword(e.target.value)}
						/>
						<p className="text-gray-600 text-xs mt-1">
							Must contain 1 uppercase letter, 1 number, min. 8 characters.
						</p>
					</div>
					<input
						type="button"
						className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						onClick={(loginUser)}
						value="login"
					/>
			
					<p className="text-gray-600 text-xs text-center mt-4">
						By clicking Register, you agree to accept MyCRM's
						<a href="#" className="text-blue-500 hover:underline">
							Terms and Conditions
						</a>
						.
					</p>
				</form>
			</div>
		</div>
	);
}


