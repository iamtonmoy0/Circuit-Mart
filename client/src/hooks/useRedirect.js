
import { WELCOMEASADMIN, WELCOMEASUSER } from "../routes/routePath";

const useRedirect = (user,navigate) => {
  if (user?.role === "admin") {
   return navigate(WELCOMEASADMIN);
  } else {
   return  navigate(WELCOMEASUSER);
  }
};

export default useRedirect;


