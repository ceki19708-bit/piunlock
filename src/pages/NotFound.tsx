import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="text-6xl sm:text-7xl font-bold text-pi-purple mb-2">404</h1>
          <p className="text-lg sm:text-xl text-gray-700 font-medium">Page Not Found</p>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block bg-gradient-to-r from-pi-purple to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
