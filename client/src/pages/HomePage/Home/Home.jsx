import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NewArrivals from "../NewArrivals/NewArrivals";
import BestSellers from "../BestSellers/BestSellers";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CategoryList from "../../../components/Category/CategoryList";
import Slider from "../Slider/Slider";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";


const Home = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to top on route change
	}, [location]);

	return (
		<div>
			<Helmet>
				<title>Circuit-Mart| Home</title>
			</Helmet>
			<SideDrawer/>
			<CategoryList/>
			<Slider/>
			<Banner/>
			{/* new product */}
			<NewArrivals/>
			<BestSellers/>
			
		</div>
	);
}

export default Home;
