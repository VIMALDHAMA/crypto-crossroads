
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface InsightData {
  riskScore: number;
  diversificationScore: number;
  quantumSafeScore: number;
  recommendations: string[];
}

export function AIInsights() {
  const [insights, setInsights] = useState<InsightData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const response = await fetch('/api/ai-insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'portfolio',
          prompt: 'Analyze current portfolio performance and provide quantum-safe recommendations',
        }),
      });
      
      if (!response.ok) throw new Error('Failed to fetch insights');
      
      const data = await response.json();
      setInsights({
        riskScore: 85,
        diversificationScore: 92,
        quantumSafeScore: 95,
        recommendations: data.response.split('\n').filter(Boolean),
      });
    } catch (error) {
      console.error('Error fetching insights:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading insights...</div>;
  if (!insights) return <div>No insights available</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Portfolio Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="text-sm font-medium">Risk Score</div>
              <div className="text-2xl font-bold">{insights.riskScore}%</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm font-medium">Diversification</div>
              <div className="text-2xl font-bold">{insights.diversificationScore}%</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm font-medium">Quantum-Safe Score</div>
              <div className="text-2xl font-bold text-green-600">{insights.quantumSafeScore}%</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-medium">AI Recommendations:</div>
            <ul className="space-y-1">
              {insights.recommendations.map((rec, index) => (
                <li key={index} className="text-sm">{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
