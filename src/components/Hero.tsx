
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Badge variant="outline" className="mb-4">
          By Nicolas Dessaigne
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          Commercial Open Source Companies
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Open source companies move more quickly than closed source companies. 
          For developer tools, being open source is a powerful way to gain developer adoption.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Github className="mr-2 h-5 w-5" />
            Start Building
          </Button>
          <Button variant="outline" size="lg">
            <Star className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>YC has funded over 150 open source companies including</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Badge variant="secondary">GitLab (W15)</Badge>
            <Badge variant="secondary">Docker (S10)</Badge>
            <Badge variant="secondary">Apollo (S11)</Badge>
            <Badge variant="secondary">Supabase (S20)</Badge>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};
