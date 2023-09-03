import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WELCOMEASUSER } from "../routes/routePath";

const useRedirect = () => {
  const user = useSelector((state) => state.user); // Assuming "user" is the key in your Redux state where user data is stored
  const navigate = useNavigate();

  if (user && user.data && user.data.role === "admin") {
    navigate("/admin/dashboard");
  } else {
    navigate(WELCOMEASUSER);
  }
};

export default useRedirect;




// import { useNavigate } from "react-router-dom";
// import { WELCOMEASUSER } from "../routes/routePath";
// // import { useSelector } from "react-redux";



// // export default  roleBasedRedirect; 

// const useRedirect = (res) => {
// //   const user =useSelector(state=>({...state}))
//   const navigate = useNavigate();
  
//         if (res.data.data.role === "admin") {
//             navigate("/admin/dashboard");
//           } else {
//               navigate(WELCOMEASUSER);
//       }
  
//   // return Redirect
//   }
// export default useRedirect;
