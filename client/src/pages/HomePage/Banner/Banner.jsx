
const Banner = () => {
	return (
		<>
		<div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    {/* Grid */}
    <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div className="text-center md:text-left">
        <p className="text-xl text-center text-black/[.8] normal-case tracking-wider">
          Welcome to Circuit Mart
        </p>
        <p className=" text-center text-xl typewriter-text mt-1 text-black font-semibold">
         New Arrival Here
        </p>
      </div>
      {/* End Col */}
    
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
</div>
			
		</>
	);
}

export default Banner;
