import { useNavigate } from "react-router-dom";

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
      <div className="bg-pi-purple text-white px-4 py-3 flex items-center justify-between shadow-md">
        <i className="hgi-stroke hgi-arrow-left-02 text-2xl cursor-pointer hover:opacity-80 transition-opacity" />
        <span className="text-lg font-semibold tracking-wide">Home</span>
        <i className="hgi-stroke hgi-arrow-down-01 text-xl cursor-pointer hover:opacity-80 transition-opacity" />
      </div>

      {/* Welcome Section */}
      <div className="text-center py-8 px-4 animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-4 drop-shadow-sm">
          <img 
            src="./images/pi-logo2.png" 
            alt="Pi Network Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-pi-gold text-xl font-semibold tracking-tight">Welcome to the Pi Browser</h1>
      </div>

      {/* Features Grid - Lighter purple colors */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm mx-auto">
          {/* Row 1 */}
          <div className="text-center group" onClick={handleUnlockPi}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-lock-key text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Unlock Pi</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-wallet-02 text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Wallet</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-idea-01 text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Brainstorm</span>
          </div>

          {/* Row 2 */}
          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-mining-03 text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Mine</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-blockchain-03 text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Blockchain</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-code-circle text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Develop</span>
          </div>

          {/* Row 3 */}
          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-passport text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">KYC</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-bubble-chat text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Chat</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-user-circle text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Profiles</span>
          </div>

          {/* Row 4 */}
          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-fire text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Fireside</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gray-50 group-active:bg-gray-100 transition-all duration-200 transform group-hover:scale-105">
              <div className="text-pi-purple">
                <i className="hgi-stroke hgi-globe-02 text-3xl sm:text-4xl" />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-pi-purple transition-colors">Domain</span>
          </div>
        </div>

        {/* Explore Button - Lighter purple */}
        <button 
          onClick={handleOtherFeature}
          className="w-full bg-pi-purple text-white py-3.5 rounded-xl text-base font-semibold hover:bg-purple-700 active:bg-purple-800 transition-all duration-200 shadow-md hover:shadow-lg max-w-sm mx-auto block"
        >
          Explore the Ecosystem
        </button>
      </div>
    </div>
  );
};

export default Index;