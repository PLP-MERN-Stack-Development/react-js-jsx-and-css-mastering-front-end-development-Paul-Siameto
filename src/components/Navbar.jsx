import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // ✅ Using the hook

  return (
    <nav className="dark:bg-gray-800 bg-white px-6 py-4 flex justify-between items-center shadow">
      <div>
        <h1 className="text-2xl font-bold">PLP Task Manager</h1>
        <div className="space-x-4 mt-2">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/tasks" className="hover:underline">
            Tasks
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>

      {/* ✅ Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="px-3 py-2 rounded text-sm font-medium border hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
