import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

// Function to load Microsoft Clarity using their exact bootstrap pattern
const loadClarity = () => {
  // Prevent double-loading
  if (document.querySelector('script[src*="clarity.ms"]')) return;

  // Clarity bootstrap: sets up queue, creates script tag, inserts before first script
  const c = window as Record<string, unknown>;
  const a = "clarity";
  c[a] = c[a] || function (...args: unknown[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((c[a] as any).q = (c[a] as any).q || []).push(args);
  };
  const t = document.createElement("script");
  t.async = true;
  t.src = "https://www.clarity.ms/tag/uwe1rrq82g";
  const y = document.getElementsByTagName("script")[0];
  if (y?.parentNode) {
    y.parentNode.insertBefore(t, y);
  } else {
    document.head.appendChild(t);
  }
};

// Extend Window interface for Clarity
declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export const CookieConsent = () => {
  // "loading" = checking localStorage, "show" = show banner, "hidden" = user decided
  const [bannerState, setBannerState] = useState<"loading" | "show" | "hidden">("loading");

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);

    if (consent === "accepted") {
      loadClarity();
      setBannerState("hidden");
    } else if (consent === "declined") {
      setBannerState("hidden");
    } else {
      // No decision yet - show the banner
      setBannerState("show");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setBannerState("hidden");
    loadClarity();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setBannerState("hidden");
  };

  // Only show banner when bannerState is "show"
  if (bannerState !== "show") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4">
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
