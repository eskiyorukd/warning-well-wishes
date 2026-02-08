import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import contractorPhoto from "@/assets/contractor-photo.jpeg";

const ContractorProfile = () => {
  return (
    <section className="py-10 md:py-16">
      <Card className="overflow-hidden border-4 border-destructive shadow-2xl bg-destructive/5">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="md:w-1/3 relative">
              <img
                src={contractorPhoto}
                alt="Contractor photo"
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-destructive/20" />
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full flex items-center gap-2 text-sm font-bold">
                <ShieldAlert className="h-4 w-4" />
                WARNING
              </div>
            </div>

            {/* Info */}
            <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-destructive/10 to-transparent">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-8 w-8 text-destructive animate-pulse" />
                <span className="text-lg font-bold uppercase tracking-wider text-destructive font-sans">
                  Do Not Hire
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Neto Remodeling
              </h2>
              <p className="text-muted-foreground font-sans mb-6 text-lg">
                Also known as Neto Flooring
              </p>

              <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                <p className="text-sm font-medium text-foreground font-sans">
                  This contractor took payment and never started the work. Multiple attempts to contact have been unsuccessful.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContractorProfile;
