import StarRatings from "react-star-ratings";

const StarRating = ({product}) => {
	if(product && product.ratings){
		const ratingArray =  product && product.ratings;
		let total = [];
		const length = ratingArray.length;
		ratingArray.map(r=>total.push(r.star))
		const totalReduced = total.reduce((p,n)=>p+n,0)
		const highest = length *5;
		const result = (totalReduced * 5)/highest;
	
	return (
		<div className="text-center">
			<span>
				<StarRatings rating={result} starDimension="20px" starRatedColor="red" editing={false} /> ({product.ratings.length})
			</span>
		</div>
	);
}
}

export default StarRating;
