import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";

const Password = () => {
	const[password,setPassword]=useState("");
	const {passwordUpdate}= useContext(AuthContext);

	const handleSubmit=async(e)=>{
		e.preventDefault()
		toast.loading('Please wait!');
		// console.log(password)
		// update Password
		await passwordUpdate(password)
		.then(()=>{
			toast.dismiss()
			toast.success('Password update successful');
			setPassword('')
			
		})
		.catch((error)=>{
			toast.dismiss()
			toast.error(error.message)
	})

	}
	return (
		<div className="dark:bg-slate-900 w-full flex h-full items-center ">
		<main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Update Password</h1>
           
          </div>

          <div className="mt-5">
            {/* <!-- Form --> */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label  className="block text-sm mb-2 dark:text-white">Enter New Password</label>
                  <div className="relative">
                    <input type="password" id="email"  value={password} onChange={e=>setPassword(e.target.value)} name="email" className={` bg-gray-200 py-3 px-4 block w-full rounded-md text-sm focus:outline-none
  ${password.length < 6 ? 'border-b-2 border-red-500' : 
   (password.length < 8 ? 'border-b-2 border-yellow-500' : 'border-b-2 border-green-500')}
  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`} required aria-describedby="email-error"/>
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
                {/* <!-- End Form Group --> */}

                <button type="submit" disabled={!password || password.length<6} className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Update Password</button>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </main>

	</div>

	);
}

export default Password;
