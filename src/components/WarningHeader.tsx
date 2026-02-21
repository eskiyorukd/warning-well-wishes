import { AlertTriangle } from "lucide-react";
import companyLogo from "@/assets/company-logo.jpg";

const WarningHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Top warning strip */}
        <div className="flex items-center justify-center gap-2 py-2 text-base font-semibold tracking-widest uppercase opacity-90">
          <AlertTriangle className="h-5 w-5" />
          <span>Consumer Warning</span>
          <AlertTriangle className="h-5 w-5" />
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src={companyLogo}
                alt="Neto Remodeling company logo"
                className="h-20 w-20 md:h-28 md:w-28 rounded-xl object-cover border-2 border-primary-foreground/30 shadow-lg"
              />
            </div>

            {/* Headline */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                ⚠️ Warning: My Experience with Neto Remodeling
              </h1>
              <p className="mt-3 text-xl md:text-2xl opacity-90 font-medium font-sans">
                $3,000 paid. Work never completed. No refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WarningHeader;
