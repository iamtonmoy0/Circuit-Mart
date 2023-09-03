import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigateRedirect = ({ path }) => {
	
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Redirect after the countdown reaches 0
    if (count === 0) {
      navigate(path);
    }

    return () => clearInterval(interval);
  }, [count, navigate, path]);

  return (
    <div className="flex flex-col bg-white items-center justify-center h-screen">
      <p className="text-4xl mb-4">Redirecting in {count} seconds</p>
      <button
        onClick={() => navigate(path)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Redirect Now
      </button>
    </div>
  );
};

export default NavigateRedirect;
