import axios from "axios";

export const createOrUpdate=async(token)=>{
	return await axios.post('http://localhost:3000/api/v1/auth',{},{
	headers:{
	token,
	}
	})
  }
  export const currentUser = async (token) => {
	return await axios.post('http://localhost:3000/api/v1/current-user',
	{},
	{
		headers: {
		token,
		},
	}
	);
  };
  
  export const currentAdmin = async (token) => {
	return await axios.post('http://localhost:3000/api/v1/current-admin',
	{},
	{
		headers: {
		token,
		},
	}
	);
  };
  