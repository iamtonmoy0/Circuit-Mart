import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as routePath from '../../routes/routePath'
const Search = () => {
	const dispatch = useDispatch();
	const {search} = useSelector(state=>({...state}));
	const {text} = search; 
	const navigate = useNavigate();
	// handle change 
	const handleChange=(e)=>{
		dispatch({
			type:"SEARCH_QUERY",
			payload:{text:e.target.value},
		})

		

	}
	// handle submit
	const handleSubmit=(e)=>{
		e.preventDefault();
		navigate(`${routePath.SHOP}?${text}`)
	}
	return (
		<>
		<form action="" onSubmit={handleSubmit}>
		<div className="hidden mx-auto sm:block">
          <label htmlFor="icon" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <svg className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <input onChange={handleChange} type="text" id="icon" name="icon" className="py-2 px-4 outline-none pl-11 pr-20 block w-92 md:w-96 bg-gray-100  border-2 border-b-blue-400 hover:border-b-green-300 shadow-sm rounded-md text-sm text-gray-900 focus:z-10 placeholder:text-gray-500" placeholder="Search"/>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
              {/* <span className="text-gray-500">Ctrl + /</span> */}
            </div>
          </div>
        </div>

		</form>
			
		</>
	);
}

export default Search;
