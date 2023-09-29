import StarRatings from "react-star-ratings";

const StarFilter = ({starClick,numOfStar}) => {
	return (
		<>
			<StarRatings
			numberOfStars={numOfStar}
			starDimension="20px"
			starSpacing="2px"
			starHoverColor="red"
			starEmptyColor="red"
			changeRating={()=>starClick(numOfStar)}
			/>
		</>
	);
}

export default StarFilter;
