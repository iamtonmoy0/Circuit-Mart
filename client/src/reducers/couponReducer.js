export const couponReducer=(state=false,action)=>{
switch(action.type){
	case "COUPON_EXIST":
		return action.payload;
	default:
		return state;	
}
}