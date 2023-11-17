import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="banner" id="home">
			<h1>Swarupa Bagade</h1>
			<p>Cloud Engineer and Tech Enthusiast</p>
            <div className="bannerButton">
                <Link to="/#contact">Hire me</Link>
                <Link to="/#contact">Resume</Link>
            </div>
		</div>
	);
};

export default Banner;
