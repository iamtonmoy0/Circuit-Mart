import axios from "axios";

export const createOrUpdate=async(token)=>{
	return await axios.post('http://localhost:3000/api/v1/auth',{},{
	headers:{
	token,
	}
	})
  }