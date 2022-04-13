import "./index.css";
import bgImage from "../../assets/img/manPlayaDelCarmen.jpg";
import award from "../../assets/img/structureBatumi.jpg";

const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={bgImage} alt="man walking on beach" className="a-img" />
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">Some more text about me doing interesting stuff</p>
				<p className="a-desc">
					And a further description of me doing some interesting things
				</p>
				<div className="a-award">
					<img
						src={award}
						alt="beach in Batumi, Georgia"
						className="a-award-img"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
