import { Card, CardContent } from "@/components/ui/card";
import { Camera, ImagePlus } from "lucide-react";
import contractorPhoto from "@/assets/contractor-photo.jpeg";
import companyLogo from "@/assets/company-logo.jpg";

const EvidenceGallery = () => {
  const images = [
    { src: contractorPhoto, alt: "Contractor photo", label: "Contractor" },
    { src: companyLogo, alt: "Company logo", label: "Company Logo" },
  ];

  const placeholders = [
    "Text message screenshot",
    "Payment receipt",
    "Before/After photos",
    "Additional evidence",
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="flex items-center gap-3 justify-center mb-3">
        <Camera className="h-6 w-6 text-primary" />
        <h2 className="text-2xl md:text-4xl font-bold">Evidence & Documentation</h2>
      </div>
      <p className="text-center text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">
        Photos and documentation related to this experience.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card key={image.label} className="overflow-hidden group hover:shadow-lg transition-shadow">
            <CardContent className="p-0 relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
                <span className="text-background text-sm font-semibold font-sans">
                  {image.label}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}

        {placeholders.map((label) => (
          <Card
            key={label}
            className="overflow-hidden border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors"
          >
            <CardContent className="p-0 h-48 md:h-56 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <ImagePlus className="h-8 w-8 opacity-40" />
              <span className="text-xs font-sans font-medium opacity-60">
                {label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EvidenceGallery;
