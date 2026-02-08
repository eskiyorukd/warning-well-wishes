import { AlertTriangle } from "lucide-react";

const WarningFooter = () => {
  return (
    <footer className="border-t border-border bg-muted/50 py-8 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-primary">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest font-sans">
            Disclaimer
          </span>
        </div>
        <p className="text-sm text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
          This page represents my personal experience and opinion regarding Neto Remodeling.
          All statements made are based on my own interactions and documentation.
          This is not legal advice. If you have been affected, consult with a legal professional.
        </p>
        <p className="text-xs text-muted-foreground/60 font-sans mt-4">
          Page created February 2026
        </p>
      </div>
    </footer>
  );
};

export default WarningFooter;
