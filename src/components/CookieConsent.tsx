import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "declined" | null;

// Function to load Microsoft Clarity
const loadClarity = () => {
  if (window.clarity) return; // Already loaded

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "uwe1rrq82g");
  `;
  document.head.appendChild(script);
};

// Extend Window interface for Clarity
declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY) as ConsentStatus;

    if (consent === "accepted") {
      // User previously accepted - load analytics
      loadClarity();
    } else if (consent === null) {
      // No decision yet - show banner
      setShowBanner(true);
    }
    // If declined, do nothing
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShowBanner(false);
    loadClarity();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-4xl mx-auto glass rounded-xl p-4 md:p-6 shadow-2xl border border-border/50">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Cookie Preferences</h3>
            <p className="text-sm text-muted-foreground">
              We use analytics cookies to understand how you use our site and improve your experience.
              No personal data is sold or shared with third parties.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-muted-foreground hover:text-foreground"
            >
              Decline
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleAccept}
            >
              Accept
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
