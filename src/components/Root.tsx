import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Root() {
	return (
		<>
			<Header />
			<ToastContainer />
			<Outlet />
		</>
	);
}
