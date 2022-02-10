import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import Menus from "./Pages/Menus/Menus";

function App() {
	return (
		<div className="">
			<Router>
				<NavBar />
				<Routes>
					<Route index element={<Home />}>
						{" "}
					</Route>
					<Route path="/home" element={<Home />}>
						{" "}
					</Route>
					<Route path="/contact" element={<Contact />}>
						{" "}
					</Route>
					<Route path="/menus" element={<Menus />}>
						{" "}
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
