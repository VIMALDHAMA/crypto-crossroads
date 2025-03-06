
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PortfolioAnalytics } from "@/components/PortfolioAnalytics";
import { SentimentAnalysis } from "@/components/SentimentAnalysis";
import { ChartPatternRecognition } from "@/components/ChartPatternRecognition";
import { TradingAgent } from "@/components/TradingAgent";
import { VoiceTradeAssistant } from "@/components/VoiceTradeAssistant";
import { AITradingDAO } from "@/components/AITradingDAO";
import { LineChart, BarChart3, Brain, Mic, TrendingUp, Bot, Sparkles } from "lucide-react";

const Analytics = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-8">
        <LineChart className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold">Analytics & AI Trading</h1>
      </div>

      <Tabs defaultValue="portfolio" className="space-y-8">
        <TabsList className="grid grid-cols-2 sm:grid-cols-6 w-full max-w-4xl">
          <TabsTrigger value="portfolio" className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            Portfolio
          </TabsTrigger>
          <TabsTrigger value="agent" className="flex items-center gap-1">
            <Brain className="h-4 w-4" />
            RL Agent
          </TabsTrigger>
          <TabsTrigger value="voice" className="flex items-center gap-1">
            <Mic className="h-4 w-4" />
            Voice Trading
          </TabsTrigger>
          <TabsTrigger value="patterns" className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            Patterns
          </TabsTrigger>
          <TabsTrigger value="sentiment" className="flex items-center gap-1">
            <Sparkles className="h-4 w-4" />
            Sentiment
          </TabsTrigger>
          <TabsTrigger value="ai-dao" className="flex items-center gap-1">
            <Bot className="h-4 w-4" />
            AI-DAO
          </TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <PortfolioAnalytics />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agent">
          <div className="grid gap-6">
            <TradingAgent />
          </div>
        </TabsContent>

        <TabsContent value="voice">
          <div className="grid gap-6">
            <VoiceTradeAssistant />
          </div>
        </TabsContent>

        <TabsContent value="patterns">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Chart Pattern Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartPatternRecognition />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sentiment">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Sentiment Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <SentimentAnalysis />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-dao">
          <div className="grid gap-6">
            <AITradingDAO />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
