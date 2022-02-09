import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import NavBar from "./Components/NavBar/NavBar";

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
					<Route path="/services" element={<Services />}>
						{" "}
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
