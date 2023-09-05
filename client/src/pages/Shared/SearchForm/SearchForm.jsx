

const SearchForm = ({handleChange,keywords}) => {
	return (
		<>
		<input type="text" onChange={handleChange} value={keywords}  id="hs-feedback-post-comment-name-1" className="py-3 mt-16 mx-auto px-4 block w-[500px] rounded-md bg-gray-200 text-sm border-b-2 focus:border-b-2 focus:border-green-500 outline-none   sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Search Category"/>
       
	
		</>
	);
}

export default SearchForm;
