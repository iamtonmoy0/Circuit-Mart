let initialState = [];

// get local storage data
if(typeof window !== undefined ){
	if(localStorage.getItem('cart')){
		initialState=JSON.parse(localStorage.getItem("cart"));
	}else{
		initialState= []
	}
}

export const cartReducer=(state=initialState,action)=>{
	switch(action.type){
		case "ADD_TO_CART":
			return action.payload;
		default:
			return state;	
	}
}
export const priceReducer=(state=initialState,action)=>{
	switch(action.type){
		case "TOTAL_CART_PRICE":
			return action.payload;
		default:
			return state;	
	}
}
