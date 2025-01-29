import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, AlertTriangle } from "lucide-react";

interface AIInsight {
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
      <CardHeader>
        <CardTitle>AI Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-secondary/10 rounded-lg">
              <div className="mt-1">{getIcon(insight.type)}</div>
              <div>
                <h4 className="font-semibold">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <span className="text-xs text-muted-foreground mt-2 block">
                  {insight.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}