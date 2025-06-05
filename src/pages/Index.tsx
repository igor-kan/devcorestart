
import { Hero } from "@/components/Hero";
import { CoreConcept } from "@/components/CoreConcept";
import { KeyIngredients } from "@/components/KeyIngredients";
import { CommercialLayer } from "@/components/CommercialLayer";
import { CommunityFlywheel } from "@/components/CommunityFlywheel";
import { TechnicalAdvantage } from "@/components/TechnicalAdvantage";
import { PathToSuccess } from "@/components/PathToSuccess";
import { ExampleCompanies } from "@/components/ExampleCompanies";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <CoreConcept />
      <KeyIngredients />
      <CommercialLayer />
      <CommunityFlywheel />
      <TechnicalAdvantage />
      <PathToSuccess />
      <ExampleCompanies />
      <CallToAction />
    </div>
  );
};

export default Index;
