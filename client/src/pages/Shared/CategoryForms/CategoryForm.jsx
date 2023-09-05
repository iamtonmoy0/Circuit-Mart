
const CategoryForm = ({handleSubmit,name}) => {
	return (
		<>
	

    {/* Card */}
    <div className="mt-5 p-4 relative  bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={e=>handleSubmit(e)} >
        <div className="mb-4 sm:mb-8">
          <label For="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Category Name</label>
          <input required type="text" defaultValue={name} name="category" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full rounded-md bg-gray-200 text-sm border-b-2 focus:border-b-2 focus:border-green-500 outline-none   sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Enter  name of category"/>
        </div>


        <div className="mt-6 grid">
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Submit</button>
        </div>
      </form>
    </div>
    {/* End Card */}
  
		</>
	);
}

export default CategoryForm;
