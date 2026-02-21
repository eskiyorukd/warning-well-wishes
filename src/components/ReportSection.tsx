import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Share2 } from "lucide-react";

const reportLinks = [
  {
    name: "Better Business Bureau (BBB)",
    url: "https://www.bbb.org/file-a-complaint",
    description: "File a formal complaint against the business.",
  },
  {
    name: "Federal Trade Commission (FTC)",
    url: "https://reportfraud.ftc.gov/",
    description: "Report fraud to the federal government.",
  },
  {
    name: "State Attorney General",
    url: "https://www.usa.gov/state-attorney-general",
    description: "Find your state's consumer protection office.",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "X / Twitter",
    getUrl: (url: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent("Warning: My experience with Neto Remodeling - $3,000 paid, work never completed, no refund.")}&url=${encodeURIComponent(url)}`,
  },
  {
    name: "Nextdoor",
    getUrl: () => "https://nextdoor.com/",
  },
];

const ReportSection = () => {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <section className="py-10 md:py-16">
      <div className="flex items-center gap-3 justify-center mb-3">
        <Shield className="h-7 w-7 text-primary" />
        <h2 className="text-3xl md:text-5xl font-bold">Report & Take Action</h2>
      </div>
      <p className="text-center text-muted-foreground font-sans mb-10 max-w-2xl mx-auto text-lg">
        If you've had a similar experience, consider filing a complaint with these agencies.
      </p>

      {/* Report links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {reportLinks.map((link) => (
          <Card key={link.name} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="font-bold text-xl font-sans mb-2">{link.name}</h3>
              <p className="text-base text-muted-foreground font-sans mb-4 flex-1">
                {link.description}
              </p>
              <Button asChild variant="outline" className="w-full gap-2">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Social sharing */}
      <Card className="bg-secondary/50 border-0">
        <CardContent className="p-6 md:p-8 text-center">
          <div className="flex items-center gap-2 justify-center mb-3">
            <Share2 className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-xl font-sans">Spread the Word</h3>
          </div>
          <p className="text-base text-muted-foreground font-sans mb-5 max-w-md mx-auto">
            Help protect others in your community by sharing this page.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {socialLinks.map((social) => (
              <Button key={social.name} asChild variant="default" size="lg" className="gap-2">
                <a
                  href={social.getUrl(pageUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ReportSection;
