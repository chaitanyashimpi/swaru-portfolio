import React, { useState } from "react";
import logo from "../images/fav2.png";
import { Link } from "react-router-dom";

const Header = () => {
	const [menu, setMenu] = useState(true);

	const menuItemOpener = () => {
		menu ? setMenu(false) : setMenu(true);
	};

	return (
		<header>
			<a className="logo" href="#banner">
				<img src={logo} alt="Swarupa Bagade Logo" />
				<p>
					<span>S</span>warupa <br />
					<span>B</span>agade
				</p>
			</a>
			<ul style={menu ? { right: "-320px" } : { right: "0px" }}>
				<li><Link to = '/'>Home</Link></li>
				<li><Link to ='/'>About</Link></li>
				<li><Link to = '/'>Skills</Link></li>
				<li><Link to = '/'>Services</Link></li>
				<li><Link to = '/'>Contact</Link></li>
				<li>
					<Link href="/">Resume</Link>
				</li>
			</ul>

			{menu ? (
				<i
					id="menu"
					className="menuBar fas fa-bars"
					onClick={menuItemOpener}
				></i>
			) : (
				<i
					id="close"
					className="menuBar fas fa-times"
					onClick={menuItemOpener}
				></i>
			)}
		</header>
	);
};

export default Header;
