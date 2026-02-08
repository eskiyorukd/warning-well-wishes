import WarningHeader from "@/components/WarningHeader";
import ContractorProfile from "@/components/ContractorProfile";
import ExperienceSummary from "@/components/ExperienceSummary";
import EvidenceGallery from "@/components/EvidenceGallery";
import ReportSection from "@/components/ReportSection";
import WarningFooter from "@/components/WarningFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WarningHeader />
      <main className="container mx-auto px-4">
        <ContractorProfile />
        <ExperienceSummary />
        <EvidenceGallery />
        <ReportSection />
      </main>
      <WarningFooter />
    </div>
  );
};

export default Index;
