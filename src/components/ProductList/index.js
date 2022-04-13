import "./index.css";
import Product from "../Product";
import { productList } from "../../data";

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-text">
				<h1 className="pl-title">Some Catchy Title</h1>
				<p className="pl-desc">
					Some inspiting text about how incredible stuff can be
				</p>
			</div>
			<div className="pl-list">
				{productList.map((item) => (
					<Product key={item.id} img={item.img} link={item.link} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
