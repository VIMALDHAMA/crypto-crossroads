
import { PortfolioAnalytics } from "@/components/PortfolioAnalytics";
import { AIInsights } from "@/components/AIInsights";
import { ChartPatternRecognition } from "@/components/ChartPatternRecognition";
import { SentimentAnalysis } from "@/components/SentimentAnalysis";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, TrendingUp, PieChart, Brain } from "lucide-react";

const Analytics = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex items-center gap-2 mb-8">
        <BarChart2 className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold">Portfolio Analytics</h1>
      </div>

      <div className="grid gap-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$124,532.89</p>
              <p className="text-sm text-green-500">+2.5% this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Asset Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Active assets</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Risk Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">Moderate</p>
              <p className="text-sm text-muted-foreground">Based on portfolio diversity</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <PortfolioAnalytics />
          <AIInsights />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ChartPatternRecognition />
          <SentimentAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
