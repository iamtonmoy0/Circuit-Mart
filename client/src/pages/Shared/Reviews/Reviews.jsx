import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as routePath from '../../../routes/routePath';
import { useEffect, useState } from "react";
import { createReview, getReview } from "../../../functions/reviewFunctions";
import toast from "react-hot-toast";
import { formatDistanceToNow } from 'date-fns';


const Reviews = ({product}) => {
	const {user}= useSelector(state=>({...state}))
	const [review,setReview]=useState([])
	const navigate = useNavigate();
	const {slug}=useParams();


useEffect(()=>{
	loadReview()
},[])

const loadReview=()=>{
	getReview(product._id)
	.then(res=>{
		setReview(res.data.data)
	})
}
console.log(review)

//handle modal
	const handleModal= ()=>{
		if(user && user.token){
		return
		}else{
		navigate(routePath.LOGIN,{ state: { from: `/product/${slug}` } }) //giving a route for redirect after login
		}
	}
		//handle submit

		const handleSubmit=(e)=>{
			e.preventDefault()
			const form = e.target;
			const message =form.message.value;
			const data = {userId:user?._id,productId:product?._id,message}
			createReview(data,user?.token)
			.then(res=>{
				loadReview()
				console.log(res)
			}).catch(err=>{
				toast.error(err.message)
			})
		}

	return (
		<div className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-1">
			<div className='h-[35rem] overflow-y-scroll'>
			{review && review.map(r => (
  <div key={r._id} className="border border-gray-300 rounded-lg p-4 mb-4">
    <div className="flex items-center mb-2">
      {r.userId && (
        <img
          src={r.userId.picture} // Replace with the actual user's profile image URL
          alt={`${r.userId.name}'s Profile`}
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <span className="text-lg font-semibold">{r.userId && r.userId.name}</span>
    </div>
    <p className="text-gray-600">{r.message}</p>
    <p className="text-sm text-gray-400 mt-2">{formatDistanceToNow(new Date(r.createdAt))} ago</p>
  </div>
))}

			</div>

			<div>
			{/* Comment Form */}
<div className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
  <div className="mx-auto max-w-2xl">
    <div className="text-center">
      <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
        Post a Comment
      </h2>
    </div>

    {/* Card */}
    <div className="mt-5 p-4 relative z-10 bg-gray-200 border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
      {user && user.token ?
	<form onSubmit={handleSubmit}>
        <div className="mb-4 sm:mb-8">
          <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full name</label>
          <input  value={user?.name ||""} type="text" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full border-gray-200 outline-none rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Full name"/>
        </div>

        <div className="mb-4 sm:mb-8">
          <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
          <input  value={user?.email || ''} type="email" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border-gray-200 outline-none rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Email address" />
        </div>

        <div>
          <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Comment</label>
          <div className="mt-1">
            <textarea name='message' id="hs-feedback-post-comment-textarea-1"  rows="3" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm outline-none focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Leave your comment here..."></textarea>
          </div>
        </div>
		
        <div className="mt-6 grid">
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Submit</button>
        </div>
      </form>
	:
	<div className="mt-6 grid">
	<button onClick={handleModal} type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[tomato] text-dark  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Login For Comment</button>
  </div>
	}
    </div>
    {/* End Card */}
  </div>
</div>
{/* End Comment Form */}
			</div>
		</div>
	);
}

export default Reviews;
