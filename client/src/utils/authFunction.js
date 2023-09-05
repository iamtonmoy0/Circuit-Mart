import axios from "axios";

export const createOrUpdate=async(token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/auth`,{},{
	headers:{
	token,
	}
	})
  }
  export const currentUser = async (token) => {
	return await axios.post(`${import.meta.env.VITE_Base_Url}/current-user`,
	{},
	{
		headers: {
		token,
		},
	}
	);
  };
  
  export const currentAdmin = async (token) => {
	return await axios.post(`${import.meta.env.VITE_Base_Url}/current-admin`,
	{},
	{
		headers: {
		token,
		},
	}
	);
  };
  