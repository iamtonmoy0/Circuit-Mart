export const ROOT ='/'
export const LOGIN ='/login'
export const REGISTER ='/register'
export const REGISTER_COMPLETED =`${REGISTER}/complete`
export const RESET_PASS ='/Forgot_Password'
export const VIEW_PRODUCT ='/product'
export const VIEW_BY_CATEGORY ='/category'
export const SHOP ='/shop'
export const CART ='/cart'
export const CHECKOUT ='/checkout'

// admin route
export const WELCOME_AS_ADMIN ='/admin/dashboard'
export const CATEGORY =`${WELCOME_AS_ADMIN}/category`
export const UPDATE_CATEGORY =`${CATEGORY}`
export const SUB_CATEGORY =`${WELCOME_AS_ADMIN}/sub-category`
export const UPDATE_SUB_CATEGORY =`${SUB_CATEGORY}`
export const PRODUCT =`${WELCOME_AS_ADMIN}/product`
export const ALL_PRODUCTS =`${WELCOME_AS_ADMIN}/products`
export const UPDATE_PRODUCT =`${ALL_PRODUCTS}`
// user route
export const WELCOME_AS_USER ='/user/dashboard'
export const USER_WISHLIST =`${WELCOME_AS_USER}/wishlist`
export const USER_PASSWORD =`${WELCOME_AS_USER}/password`
