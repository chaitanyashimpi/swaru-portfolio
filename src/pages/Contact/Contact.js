import React from "react";
// import Image from "../../images/banner.jpg";

const Contact = () => {
	return (
		<div className="contactSection">
			<h5>Contact</h5>
			<h1>Contact With Me</h1>

			<div className="contact">
				<div className="contactInfo">
					<div className="contactImg">
						<div className="conImg"></div>
					</div>
					<div className="contactInformation">
						<h2>Swarupa Bagade</h2>
						<span>Cloud Engineer</span>
						<span>
							I am available for freelance work. Connect with me via and call in
							to my account.
						</span>
						<span>
							Email:
							<a href="mailto:admin@swarupa.me">admin@swarupa.me</a>
						</span>
						<span>FIND WITH ME</span>
						<div className="contactSocials">
							<a href="/">
								<i class="fab fa-linkedin-in"></i>
							</a>
							<a href="/">
								<i class="fab fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="contactForm">
          <form>
            <div className="formInput">
              <label htmlFor="">Your Name</label>
              <input type="text" name="" id="" />
            </div>
            <div className="formInput">
              <label htmlFor="">Phone Number</label>
              <input type="number" name="" id="" />
            </div>
            <div className="formInput">
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div className="formInput">
              <label htmlFor="">Subject</label>
              <input type="text" name="" id="" />
            </div>
            <div className="formInput">
              <label htmlFor="">Your Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
			</div>
		</div>
	);
};

export default Contact;
