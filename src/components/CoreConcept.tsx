
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap } from "lucide-react";

export const CoreConcept = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🎯 Core Concept
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch an open source project that solves a core developer problem and pairs it with a commercial layer
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              "DevCore" Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Open Source Foundation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Solves real developer problems</li>
                  <li>• Community-driven development</li>
                  <li>• Transparent roadmap & governance</li>
                  <li>• Technical merit over sales tactics</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-600">Commercial Layer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Support & cloud hosting</li>
                  <li>• Enterprise features & compliance</li>
                  <li>• Sustainable business model</li>
                  <li>• Faster enterprise adoption</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <span className="font-semibold">Technical Founders' Advantage</span>
              </div>
              <p className="text-gray-600">
                Very technical founders are at a strong advantage here, as the sales motion relies more 
                on the technical merits of the project rather than strong sales tactics.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
