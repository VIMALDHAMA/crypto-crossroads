import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, AlertTriangle, Shield } from "lucide-react";

export interface AIInsight {
  type: 'recommendation' | 'alert' | 'prediction';
  title: string;
  description: string;
  timestamp: string;
}

interface AIInsightsProps {
  insights: AIInsight[];
}

export function AIInsights({ insights }: AIInsightsProps) {
  const getIcon = (type: AIInsight['type']) => {
    switch (type) {
      case 'recommendation':
        return <Brain className="w-4 h-4 text-blue-500" />;
      case 'prediction':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'alert':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">AI Insights</CardTitle>
        <Shield className="w-5 h-5 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
              <div className="mt-1">{getIcon(insight.type)}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-primary">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <span className="text-xs text-muted-foreground mt-2 block">
                  {new Date(insight.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}