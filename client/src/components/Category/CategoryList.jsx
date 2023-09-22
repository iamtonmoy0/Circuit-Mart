import { useEffect, useState } from "react";
import { getCategories } from "../../functions/categoryFunctions";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Render load categories
  useEffect(() => {
    loadCategories();
  }, []);

  // Load categories
  const loadCategories = () => {
    getCategories().then((res) => setCategories(res.data.data));
  };

  // Toggle the menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="py-3 px-5 bg-[#F3FDE8]">
        <div className="flex cursor-pointer flex-wrap">
          {categories && categories.length > 0 && (
            <>
              {categories.map((cat, index) => (
                <p
                  key={cat._id}
                  className={`${
                    isMenuOpen ? "mb-1" : index !== 0 ? "ml-2" : ""
                  } hover:bg-green-300 py-1 rounded`}
                >
                  {cat.name}
                </p>
              ))}
              {/* Show the "Show More" button inline with categories on mobile and tablet */}
              {categories.length > 15 && (
                <button
                  className={`text-gray-700 hover:text-gray-900 pl-5  ${
                    isMenuOpen ? "mt-1 ml-2" : "mt-2"
                  }`}
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? "Show Less" : "Show More"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
