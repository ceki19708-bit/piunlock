import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ChevronDown, 
  Unlock, 
  Wallet2, 
  Sparkles, 
  Coins, 
  Network, 
  Terminal, 
  ShieldCheck, 
  MessageSquare, 
  Users, 
  Video, 
  Globe 
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleUnlockPi = () => {
    navigate("/unlock-pi");
  };

  const handleOtherFeature = () => {
    // Other buttons redirect back to first page (current page)
    navigate("/");
  };

  const handleBack = () => {
    // Handle back navigation if needed
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Professional Header - Compact */}
      <div className="bg-[#6C3F99] text-white px-3 py-2 sm:py-2.5 flex items-center justify-between shadow-lg sticky top-0 z-50">
        <ArrowLeft 
          className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer hover:opacity-80 transition-opacity active:scale-95" 
          onClick={handleBack} 
        />
        <span className="text-sm sm:text-base font-semibold tracking-wide">Home</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer hover:opacity-80 transition-opacity" />
      </div>

      {/* Welcome Section */}
      <div className="text-center py-6 sm:py-8 px-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 drop-shadow-lg">
          <img 
            src="./images/pi-logo2.png" 
            alt="Pi Network Logo" 
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>
        <h1 className="text-pi-gold text-xl sm:text-2xl font-bold tracking-tight mb-1">Welcome to the Pi Browser</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">Your gateway to the Pi ecosystem</p>
      </div>

      {/* Features Grid - Professional Design */}
      <div className="px-4 sm:px-6 pb-8 sm:pb-10">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6 max-w-md mx-auto">
          {/* Row 1 */}
          <div className="text-center group" onClick={handleUnlockPi}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Unlock className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Unlock Pi</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Wallet2 className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Wallet</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Brainstorm</span>
          </div>

          {/* Row 2 */}
          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Coins className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Mine</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Network className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Blockchain</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Terminal className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Develop</span>
          </div>

          {/* Row 3 */}
          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <ShieldCheck className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">KYC</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <MessageSquare className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Chat</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Users className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Profiles</span>
          </div>

          {/* Row 4 */}
          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Video className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Fireside</span>
          </div>

          <div className="text-center group" onClick={handleOtherFeature}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 border border-gray-200/80 shadow-sm rounded-xl flex items-center justify-center bg-white cursor-pointer group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white group-active:scale-95 transition-all duration-200 transform group-hover:scale-105 group-hover:shadow-lg group-hover:border-pi-purple/30">
              <Globe className="w-7 h-7 sm:w-9 sm:h-9 text-pi-purple stroke-[1.5] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-pi-purple transition-colors">Domain</span>
          </div>
        </div>

        {/* Explore Button - Professional Design */}
        <button 
          onClick={handleOtherFeature}
          className="w-full bg-gradient-to-r from-pi-purple to-purple-700 text-white py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:from-purple-700 hover:to-purple-800 active:scale-98 transition-all duration-200 shadow-lg hover:shadow-xl max-w-md mx-auto block"
        >
          Explore the Ecosystem
        </button>
      </div>
    </div>
  );
};

export default Index;