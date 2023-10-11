import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer, priceReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import { couponReducer } from "./couponReducer";
import { wishlistReducer } from "./wishlistReducer";

const rootReducer = combineReducers({
user:userReducer,
search:searchReducer,
cart:cartReducer,
drawer:drawerReducer,
coupon:couponReducer,
totalPrice:priceReducer,
wishlist:wishlistReducer,


});
export default rootReducer;