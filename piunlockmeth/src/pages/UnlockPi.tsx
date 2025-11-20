import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const UnlockPi = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [piAmount, setPiAmount] = useState([1]);
  const [walletAddress, setWalletAddress] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(false);
  const [lockedBalance, setLockedBalance] = useState(0);
  const [isCheckingBalance, setIsCheckingBalance] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [hasCheckedBalance, setHasCheckedBalance] = useState(false);
  const [selectedUnlockAmount, setSelectedUnlockAmount] = useState(0);

  const handleBack = () => {
    navigate("/");
  };

  const handleSelectWallet = () => {
    // Focus the wallet address input
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleUnlockRequest = () => {
    // Navigate to wallet unlock page (knowledge base file 3)
    navigate("/wallet-unlock");
  };

  const validateWalletAddress = (address: string) => {
    // Basic Pi wallet address validation (simplified)
    const isValid = address.length >= 34 && address.length <= 62 && /^[A-Za-z0-9]+$/.test(address);
    setIsValidAddress(isValid);
    return isValid;
  };

  const checkWalletBalance = async (address: string) => {
    if (!validateWalletAddress(address)) return;
    
    setIsCheckingBalance(true);
    
    // Simulate balance checking (in real implementation, this would call Pi Network API)
    setTimeout(() => {
      // Generate random locked balance for demo
      const randomBalance = Math.floor(Math.random() * 4000) + 1000;
      setLockedBalance(randomBalance);
      setHasCheckedBalance(true);
      setIsCheckingBalance(false);
      // Set initial unlock amount to maximum available (50% of locked)
      const maxUnlock = Math.floor(randomBalance * 0.5);
      setSelectedUnlockAmount(maxUnlock);
      setPiAmount([maxUnlock]);
    }, 2000);
  };

  const handleCheckBalance = () => {
    if (isValidAddress && walletAddress.trim()) {
      checkWalletBalance(walletAddress);
    }
  };

  const handleUnlockCustomAmount = () => {
    if (selectedUnlockAmount > 0) {
      // Navigate to wallet unlock page with the custom amount
      navigate("/wallet-unlock", { 
        state: { 
          walletAddress, 
          unlockAmount: selectedUnlockAmount,
          lockedBalance 
        } 
      });
    }
  };

  const handleWalletAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setWalletAddress(address);
    
    if (address.length > 0) {
      validateWalletAddress(address);
      // Reset balance check state when address changes
      setHasCheckedBalance(false);
      setLockedBalance(0);
      setSelectedUnlockAmount(0);
    } else {
      setIsValidAddress(false);
      setLockedBalance(0);
      setHasCheckedBalance(false);
      setSelectedUnlockAmount(0);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Smaller Header Image with Navigation */}
      <div className="relative w-full">
        <img 
          src="./images/header 1.jpg" 
          alt="Unlock Pi Header" 
          className="w-full h-12 sm:h-14 object-cover"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {/* Back button overlay */}
        <div className="absolute top-2 left-3 sm:top-3 sm:left-4">
          <i 
            className="hgi-stroke hgi-arrow-left-02 w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer hover:text-pi-gold transition-colors" 
            onClick={handleBack} 
          />
        </div>
      </div>

      <div className="px-4 py-4 sm:py-6 space-y-4 sm:space-y-6 max-w-md mx-auto">
        {/* Information Banner - Matching header colors */}
        <div className="bg-amber-50 border border-pi-gold rounded-lg p-3 sm:p-4 flex items-start space-x-3">
          <i className="hgi-stroke hgi-information-circle w-4 h-4 sm:w-5 sm:h-5 text-amber-700 mt-0.5 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-amber-800">
            You can unlock the Pi you are locked in. Please select the amount of Pi you want to unlock.
          </p>
        </div>

        {/* Select Wallet Button - Matching header color */}
        <Button 
          onClick={handleSelectWallet}
          className="w-full bg-pi-purple hover:bg-purple-700 active:bg-purple-800 text-white py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors"
        >
          Select Auto Unlock Amount
        </Button>

        {/* Wallet Address Input with Balance Checking */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Enter your Wallet address to check locked Pi:
          </label>
          <div className="relative">
            <Input
              ref={inputRef}
              type="text"
              value={walletAddress}
              onChange={handleWalletAddressChange}
              placeholder="Pi wallet address"
              className={`w-full pr-10 text-sm sm:text-base ${
                walletAddress.length > 0
                  ? isValidAddress 
                    ? 'border-green-400 bg-green-50' 
                    : 'border-red-400 bg-red-50'
                  : 'border-gray-300'
              }`}
            />
            {walletAddress.length > 0 && (
              <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                isValidAddress ? 'text-green-600' : 'text-red-600'
              }`}>
                {isValidAddress ? (
                  <i className="hgi-stroke hgi-checkmark-circle-02 w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <i className="hgi-stroke hgi-cancel-circle w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </div>
            )}
          </div>
          
          {/* Check Balance Button */}
          {isValidAddress && !hasCheckedBalance && (
            <Button 
              onClick={handleCheckBalance}
              disabled={isCheckingBalance}
              className="w-full bg-pi-purple hover:bg-purple-700 active:bg-purple-800 text-white py-2 text-sm font-medium transition-colors"
            >
              {isCheckingBalance ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Checking Balance...</span>
                </div>
              ) : (
                "Check Locked Pi Balance"
              )}
            </Button>
          )}
          
          {/* Balance Display */}
          {hasCheckedBalance && lockedBalance > 0 && (
            <div className="bg-green-50 border border-green-300 rounded-lg p-3 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-800">Locked Balance Found:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-pi-gold font-bold">π</span>
                  <span className="text-sm font-bold text-green-800">
                    {lockedBalance.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-800">Available to Unlock:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-pi-gold font-bold">π</span>
                  <span className="text-sm font-bold text-green-800">
                    {Math.floor(lockedBalance * 0.5).toLocaleString()}
                  </span>
                </div>
              </div>
              
              {/* Custom Amount Selection */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-green-800">Select amount to unlock:</label>
                <div className="flex items-center space-x-2 justify-center">
                  <span className="text-lg font-bold text-pi-purple">π</span>
                  <span className="text-lg font-bold text-pi-purple">{selectedUnlockAmount}</span>
                </div>
                <Slider
                  value={[selectedUnlockAmount]}
                  onValueChange={(value) => setSelectedUnlockAmount(value[0])}
                  max={Math.floor(lockedBalance * 0.5)}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-green-700">
                  <span>Min: 1 Pi</span>
                  <span>Max: {Math.floor(lockedBalance * 0.5).toLocaleString()} Pi</span>
                </div>
              </div>
              
              {/* Unlock This Amount Button */}
              <Button 
                onClick={handleUnlockCustomAmount}
                className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white py-2 text-sm font-medium transition-colors"
              >
                Unlock π {selectedUnlockAmount.toLocaleString()} from this Wallet
              </Button>
            </div>
          )}
          
          {/* No Balance Found */}
          {hasCheckedBalance && lockedBalance === 0 && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-3">
              <p className="text-sm text-red-800">
                <strong>No Locked Pi Found:</strong> This wallet address does not have any locked Pi available for unlock.
              </p>
            </div>
          )}
        </div>

        {/* Enhanced FAQ Section */}
        <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
          <div 
            className="p-3 sm:p-4 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => setShowFAQ(!showFAQ)}
          >
            <span className="text-sm sm:text-base text-gray-800 font-medium">Why allow Unlock before locked Pi?</span>
            <div className="bg-gray-300 rounded-full p-1">
              {showFAQ ? (
                <i className="hgi-stroke hgi-arrow-up-01 w-4 h-4 text-gray-600" />
              ) : (
                <i className="hgi-stroke hgi-arrow-down-01 w-4 h-4 text-gray-600" />
              )}
            </div>
          </div>
          
          {showFAQ && (
            <div className="px-3 sm:px-4 pb-4 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3">
              <div>
                <h4 className="font-bold text-pi-purple mb-2">Unlock Pi - A Balancing Act Between Growth and Stability</h4>
                <p>
                  Pi Network commits to building a sustainable ecosystem, where Pi is not only a digital asset but also has real value in the decentralized economy. To balance the need for early access to Pi and long-term growth, we propose a flexible unlocking mechanism, ensuring fairness, stability, and encouraging active community participation.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Core Principles</h5>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li><strong>Strengthen ecosystem value:</strong> The flexible unlocking mechanism helps protect Pi's stability, avoiding large fluctuations.</li>
                  <li><strong>Encourage transactions:</strong> Active users contribute to the liquidity of the Pi economy.</li>
                  <li><strong>Ensure fairness:</strong> The mechanism applies to each level to be suitable for long-term pioneers.</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Unlock Schedule</h5>
                <p className="mb-2">Unlock ratio based on time:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li><strong>Year 1:</strong> Allow unlocking of 50% of locked Pi for pioneers</li>
                  <li><strong>Year 2:</strong> Unlock 20% of the remaining Pi</li>
                  <li><strong>Year 3:</strong> Complete the unlocking of the remaining Pi</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Amount Selection */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-medium text-gray-900">
            Select the amount of Pi to unlock (manual)
          </h3>
          
          <div className="flex items-center space-x-2 justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-pi-purple">π</span>
            <span className="text-2xl sm:text-3xl font-bold text-pi-purple">{piAmount[0]}</span>
          </div>

          <div className="space-y-2">
            <Slider
              value={piAmount}
              onValueChange={setPiAmount}
              max={lockedBalance > 0 ? Math.floor(lockedBalance * 0.5) : 5000}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500">
              <span>Minimum: 1 Pi</span>
              <span>
                Maximum: {lockedBalance > 0 
                  ? `${Math.floor(lockedBalance * 0.5).toLocaleString()} Pi` 
                  : 'total Pi locked'
                }
              </span>
            </div>
          </div>
          
          {/* Balance Warning */}
          {lockedBalance > 0 && piAmount[0] > Math.floor(lockedBalance * 0.5) && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-3">
              <p className="text-xs text-red-800">
                <strong>Warning:</strong> Selected amount exceeds your available unlock balance. 
                Maximum unlockable: π {Math.floor(lockedBalance * 0.5).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        {/* Unlock Request Button - Matching header color */}
        <Button 
          onClick={handleUnlockRequest}
          disabled={lockedBalance > 0 && piAmount[0] > Math.floor(lockedBalance * 0.5)}
          className={`w-full py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors ${
            lockedBalance > 0 && piAmount[0] > Math.floor(lockedBalance * 0.5)
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-pi-purple hover:bg-purple-700 active:bg-purple-800 text-white'
          }`}
        >
          UNLOCK REQUEST
        </Button>

        {/* Disclaimer */}
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-200">
          The locked Pi number displayed here is the Pi number that is locked in your wallet. 
          After sending the request, you need to verify the wallet owner's identity using your 
          Pi wallet recovery phrase.
        </div>
      </div>
    </div>
  );
};

export default UnlockPi;