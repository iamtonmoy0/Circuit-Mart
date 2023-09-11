import axios from 'axios';

const ImageUploadForm = ({product,setProduct}) => {
	// file upload handler
	const handelFileUpload=(e)=>{
		let files=e.target.files;

		let allUploadedFiles = product.images;
		if(files){
			for(let i =0; i<files.length; i++){
				const formData = new FormData();
				formData.append("image", files[i]);
		
					axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IBB}`,formData)
						.then(res=>{
						console.log('response:', res);
						allUploadedFiles.push(res.data.data.display_url);
						setProduct({...product,images:allUploadedFiles})
						// console.log(product.images)
					}).catch(err=>{
						console.log(err.message)
					})			
			}
		}

	}

	return (
		<div>
		<form className="pt-10">
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input type="file"  accept="image/*" multiple={true} onChange={handelFileUpload}  className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
	  
    "/>
  </label>
</form>
{
	// product.images.map(img=><img src={img} />)
}
</div>
	);
}

export default ImageUploadForm;
