import React from "react";
import "./Home.css";
import homeBanner from "../../images/pizza-banner-1.png";
import Services from "../Services/Services";

const Home = () => {
	return (
		<div>
			{/* Banner */}
			<div className="home-banner">
				<div className="home-bg">
					<div className="container">
						<div className="row justify-content-center align-items-md-center align-items-end">
							<div className="col-md-6">
								<div className="text-box">
									<h1>
										QUALITY F<span>OO</span>DS
									</h1>
									<p>HEALTHY FOOD FOR HEALTHY BODY</p>
								</div>
							</div>
							<div className="col-md-6">
								<img className="img-fluid" src={homeBanner} alt="pizza" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Services */}
			<Services />
		</div>
	);
};

export default Home;
