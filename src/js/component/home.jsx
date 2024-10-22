import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Nav_web } from "./Navbar";
import { Jumbotron_web } from "./Jumbotron";
import { Card } from "./Card";
import { Footer_web } from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Nav_web/>
			<div className="container">
				<Jumbotron_web/>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 d-flex align-items-center justify-content-center">
							<div className="mx-3">
								<Card />
							</div>
							<div className="mx-3">
								<Card />
							</div>
							<div className="mx-3">
								<Card />
							</div>
							<div className="mx-3">
								<Card />
							</div>
						</div>
					</div>
				</div>
			</div>
		<Footer_web/>
		</div>
	);
};

export default Home;
