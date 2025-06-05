
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Users, Shield, DollarSign } from "lucide-react";

export const CommercialLayer = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            3️⃣ Commercial Layer
          </h2>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Open Core Model
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Cloud className="h-6 w-6 text-blue-600" />
                Hosted/SaaS Offering
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Automatic scaling & monitoring</li>
                <li>• SSO, RBAC, advanced integrations</li>
                <li>• Guaranteed uptime & SLAs</li>
                <li>• Managed infrastructure</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Shield className="h-6 w-6 text-purple-600" />
                Enterprise Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Fine-grained access control</li>
                <li>• Compliance & audit trails</li>
                <li>• Extended support & onboarding</li>
                <li>• Private deployments</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
              Revenue Models
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm">Usage-based billing</Badge>
              <Badge variant="outline" className="text-sm">Seat-based licenses</Badge>
              <Badge variant="outline" className="text-sm">Support tiers</Badge>
              <Badge variant="outline" className="text-sm">Private cloud</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
