import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, MessageSquare, XCircle } from "lucide-react";

const facts = [
  {
    icon: DollarSign,
    title: "$3,000 Paid",
    description: "Full payment was made upfront for the agreed-upon remodeling work.",
  },
  {
    icon: XCircle,
    title: "Work Not Completed",
    description: "The job was never finished. Left the project incomplete with no resolution.",
  },
  {
    icon: DollarSign,
    title: "No Refund Given",
    description: "Despite repeated requests, no refund has been provided for the unfinished work.",
  },
  {
    icon: MessageSquare,
    title: "Text-Only Communication",
    description: "Only responds via text messages. Phone calls are ignored or unanswered.",
  },
  {
    icon: Clock,
    title: "Empty Promises",
    description: "Repeatedly promised to return and finish or issue a refund, but never followed through.",
  },
];

const ExperienceSummary = () => {
  return (
    <section className="py-10 md:py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">
        What Happened
      </h2>
      <p className="text-center text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">
        Here is a factual summary of my experience hiring Neto Remodeling for a home project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {facts.map((fact) => (
          <Card
            key={fact.title}
            className="border-l-4 border-l-primary hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <fact.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold font-sans">
                  {fact.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                {fact.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSummary;
