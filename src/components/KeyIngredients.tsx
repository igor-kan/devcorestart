
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Shield, Workflow } from "lucide-react";

export const KeyIngredients = () => {
  const productIdeas = [
    {
      category: "Next-Gen Frameworks & Tooling",
      icon: <Code className="h-5 w-5" />,
      color: "blue",
      items: [
        "Frontend: faster React alternatives (Solid, Qwik style)",
        "Backend: serverless-native frameworks, edge-first APIs",
        "Real-time/streaming data frameworks for IoT, multiplayer, or AI"
      ]
    },
    {
      category: "DevOps & Infra",
      icon: <Workflow className="h-5 w-5" />,
      color: "green",
      items: [
        "GitOps-first deployment tools",
        "ML Ops for mid-size companies (like BentoML but simpler)",
        "Cost-optimization for Kubernetes clusters"
      ]
    },
    {
      category: "Data & AI",
      icon: <Database className="h-5 w-5" />,
      color: "purple",
      items: [
        "Open-source vector database for retrieval-augmented generation",
        "Multi-modal data pipelines (video, audio, sensors) with plugin support",
        "Explainable ML dashboards"
      ]
    },
    {
      category: "Security & Compliance",
      icon: <Shield className="h-5 w-5" />,
      color: "red",
      items: [
        "Dev-friendly policy engines (like OPA, but with better UX)",
        "SAST/DAST tools designed for monorepos/microservices",
        "Privacy-compliant analytics frameworks"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🔧 Key Ingredients
          </h2>
          <p className="text-xl text-gray-600">
            Essential components for building a successful commercial open source company
          </p>
        </div>

        <Tabs defaultValue="opensource" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="opensource">Open Source Core</TabsTrigger>
            <TabsTrigger value="products">Product Ideas</TabsTrigger>
          </TabsList>

          <TabsContent value="opensource" className="space-y-6">
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">1️⃣ Open Source Core</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-blue-600">Repository & Licensing</h3>
                  <div className="space-y-2">
                    <Badge variant="outline">MIT License</Badge>
                    <Badge variant="outline">Apache 2.0</Badge>
                    <Badge variant="outline">GPL</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Choose based on your goals</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-green-600">Documentation & Community</h3>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Dev-friendly README & tutorials</li>
                    <li>• CI/CD pipelines</li>
                    <li>• Transparent roadmap</li>
                    <li>• RFC process for community input</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {productIdeas.map((category, index) => (
                <Card key={index} className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <span className={`text-${category.color}-600`}>{category.icon}</span>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center text-gray-500 text-sm italic">
              Build in your domain of expertise - these are just examples!
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
