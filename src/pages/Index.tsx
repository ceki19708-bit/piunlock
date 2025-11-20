import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleUnlockPi = () => {
    navigate("/unlock-pi");
  };

  const handleOtherFeature = () => {
    // Other buttons redirect back to first page (current page)
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Smaller Header with lighter purple color */}
      <div className="bg-purple-600 text-white px-4 py-2 flex items-center justify-between">
        <ArrowLeft className="w-5 h-5" />
        <span className="text-base font-medium">Home</span>
        <ChevronDown className="w-4 h-4" />
      </div>

      {/* Welcome Section */}
      <div className="text-center py-6 px-4">
        <div className="w-14 h-14 mx-auto mb-3">
          <img 
            src="./images/pi-logo2.png" 
            alt="Pi Network Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-orange-500 text-lg font-medium">Welcome to the Pi Browser</h1>
      </div>

      {/* Features Grid - Lighter purple colors */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm mx-auto">
          {/* Row 1 */}
          <div className="text-center" onClick={handleUnlockPi}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Unlock Pi</span>
          </div>

          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Wallet</span>
          </div>

          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Brainstorm</span>
          </div>

          {/* Row 2 */}
          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600 text-lg sm:text-xl font-bold">π</div>
            </div>
            <span className="text-xs text-gray-700">Mine</span>
          </div>

          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Blockchain</span>
          </div>

          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Develop</span>
          </div>

          {/* Row 3 */}
          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">KYC</span>
          </div>

          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Chat</span>
          </div>

          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Profiles</span>
          </div>

          {/* Row 4 */}
          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Fireside</span>
          </div>

          <div className="text-center" onClick={handleOtherFeature}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 border border-purple-600 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-100 transition-colors">
              <div className="text-purple-600">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-700">Domain</span>
          </div>
        </div>

        {/* Explore Button - Lighter purple */}
        <button 
          onClick={handleOtherFeature}
          className="w-full bg-purple-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-purple-700 active:bg-purple-800 transition-colors max-w-sm mx-auto block"
        >
          Explore the Ecosystem
        </button>
      </div>
    </div>
  );
};

export default Index;