import { useNavigate } from "react-router-dom";
import { WELCOMEASUSER } from "../routes/routePath";
import { useSelector } from "react-redux";



// export default  roleBasedRedirect; 

const RoleBasedRedirect = () => {
  const user =useSelector(state=>({...state}))
  const navigate = useNavigate();
  
        if (user?.role === "admin") {
            navigate("/admin/dashboard");
          } else {
              navigate(WELCOMEASUSER);
      }
  
  // return Redirect
  }
export default RoleBasedRedirect;
