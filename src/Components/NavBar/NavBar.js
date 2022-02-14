import React from "react";

import { Link } from "react-router-dom";
import "./NavNar.css";
import humburger from "../../images/menu/menu-2.png";


const NavBar = () => {
	function changeCss() {
		const element = document.getElementById("navigration");
		this.scrollY > 200
			? element.classList.add("bg-black")
			: element.classList.remove("bg-black");
	}
	window.addEventListener("scroll", changeCss, false);
	return (
		<>
			<nav id="navigration" className="navbar navbar-expand-md fixed-top">
				<div className="container">
					<Link className="link" to="/home">
						<h3 className="logo">
							<span>khuda</span>Lagche
						</h3>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<img className="hamburger" src={humburger} alt="" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="link" to="/home">
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link className="link" to="/menus">
									MENU
								</Link>
							</li>
							{/* {user?.email && (
								<>
									<li className="nav-item">
										<Link className="link" to="/cart">
											CART
										</Link>
									</li>
									<li className="nav-item">
										<Link className="link" to="/orderHistory">
											ORDER HISTORY
										</Link>
									</li>
								</>
							)}
							{admin && (
								<li className="nav-item">
									<Link className="link" to="/admin">
										Dashboard
									</Link>
								</li>
							)}
							{user?.email ? (
								<li className="nav-item">
									<button onClick={logOut} className="btn-orange">
										Logout
									</button>
								</li>
							) : (
								<li className="nav-item">
									<Link className="link" to="/login">
										login
									</Link>
								</li>
							)} */}
							{/* <li className="nav-item">
                     <span className="link">{user.displayName}</span>
                  </li> */}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
