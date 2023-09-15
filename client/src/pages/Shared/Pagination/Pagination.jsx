
const Pagination = ({current,totalPage,pagination}) => {

	const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
	return (
		<nav className="flex items-center space-x-2">
		<button
		className={`${
			current === 1 ? 'pointer-events-none text-gray-400' : 'text-blue-600'
		} p-4 inline-flex items-center gap-2 rounded-md`}
		onClick={() => {
			if (current > 1) {
			pagination(current - 1);
			}
		}}
		>
		<span aria-hidden="true">«</span>
		<span>Previous</span>
		</button>
		{pages.map((page) => (
		<button
			key={page}
			onClick={() => pagination(page)}
			className={`w-10 btn h-10 cursor-pointer text-black p-4 inline-flex items-center text-sm font-medium rounded-full ${
				page === current ? 'bg-blue-600 text-white' : 'bg-gray-200'
			}`}
	
			aria-current={page === current ? 'page' : undefined}
		>
			{page}
		</button>
		))}
		<button
		className={`${
			current === totalPage ? 'pointer-events-none text-gray-400' : 'text-blue-600'
		} p-4 inline-flex items-center gap-2 rounded-md`}
		onClick={() => {
			if (current < totalPage) {
			pagination(current + 1);
			}
		}}
		>
		<span>Next</span>
		<span aria-hidden="true">»</span>
		</button>
	</nav>
	);
}

export default Pagination;
