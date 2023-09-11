import axios from 'axios';
import toast from 'react-hot-toast';

const ImageUploadForm = ({product,setProduct}) => {
	// file upload handler
	const handelFileUpload=(e)=>{
		let files=e.target.files;
		toast.loading('Uploading')
		let allUploadedFiles = product.images;
		
		if(files){
			for(let i =0; i<files.length; i++){
				const formData = new FormData();
				formData.append("image", files[i]);
		
					axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_CLOUD}`,formData)
						.then(res=>{
						console.log('response:', res);
						allUploadedFiles.push(res.data.data.display_url);
						setProduct({...product,images:allUploadedFiles})
						toast.dismiss();
						toast.success('image added!');
					}).catch(err=>{
						toast.dismiss();
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
    <input required type="file"  accept="image/*" multiple={true} onChange={handelFileUpload}  className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
	  
    "/>
  </label>
</form>
 {product.images && product.images.map(image=>(<div key={image} className="relative mx-3 mt-6 inline-block">
<img className="inline-block h-[5.875rem] w-[5.875rem] rounded-md ring-2 ring-white dark:ring-gray-800" src={image} alt="Image Description"/>
</div>))
} 
</div>
	);
}

export default ImageUploadForm;
