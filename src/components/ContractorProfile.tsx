import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Wrench, AlertTriangle } from "lucide-react";
import contractorPhoto from "@/assets/contractor-photo.jpeg";

const services = ["Flooring", "Painting", "Drywall", "Remodeling"];

const ContractorProfile = () => {
  return (
    <section className="py-10 md:py-16">
      <Card className="overflow-hidden border-2 border-destructive/20 shadow-xl">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="md:w-1/3 bg-muted">
              <img
                src={contractorPhoto}
                alt="Contractor photo"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold uppercase tracking-wider text-primary font-sans">
                  Contractor Profile
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Neto Remodeling
              </h2>
              <p className="text-muted-foreground font-sans mb-6">
                Also known as Neto Flooring
              </p>

              <div className="flex items-center gap-2 mb-4 text-muted-foreground font-sans">
                <User className="h-4 w-4" />
                <span className="text-sm">Individual contractor / small business</span>
              </div>

              <div className="flex items-center gap-2 mb-3 text-muted-foreground font-sans">
                <Wrench className="h-4 w-4" />
                <span className="text-sm font-medium">Services advertised:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <Badge
                    key={service}
                    variant="secondary"
                    className="text-sm px-3 py-1 font-sans"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContractorProfile;
