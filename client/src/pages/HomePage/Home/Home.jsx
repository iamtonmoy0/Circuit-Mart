import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NewArrivals from "../NewArrivals/NewArrivals";
import BestSellers from "../BestSellers/BestSellers";

const Home = () => {

	return (
		<div>
			<Helmet>
				<title>Circuit-Mart| Home</title>
			</Helmet>
			<Banner/>
			{/* new product */}
			<NewArrivals/>
			<BestSellers/>
			
		</div>
	);
}

export default Home;
