import "./index.css";
import profilePic from "../../assets/img/polaroidProfile.JPG";

const Intro = () => {
	return (
		<div className="i">
			<div className="i-left">
				<div className="i-left-wrapper">
					<h2 className="i-intro">Hello, My name is</h2>
					<h1 className="i-name">Ambrose Wilkinson</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">Web Developer</div>
							<div className="i-title-item">Ui/UX Designer</div>
							<div className="i-title-item">Photography</div>
							<div className="i-title-item">Writer</div>
							<div className="i-title-item">More Content</div>
						</div>
					</div>
					<p className="i-desc">Some interesting text about myself</p>
				</div>
			</div>
			<div className="i-right">
                <div className="i-bg"></div>
				<img src={profilePic} alt="profile" className="i-img" />
			</div>
		</div>
	);
};

export default Intro;
