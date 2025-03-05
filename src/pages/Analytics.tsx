import { PortfolioAnalytics } from "@/components/PortfolioAnalytics";
import { AIInsights } from "@/components/AIInsights";
import { ChartPatternRecognition } from "@/components/ChartPatternRecognition";
import { SentimentAnalysis } from "@/components/SentimentAnalysis";
import { TradingAgent } from "@/components/TradingAgent";
import { BacktestEngine } from "@/components/BacktestEngine";
import { QuantumOptimization } from "@/components/QuantumOptimization";
import { QuantumHFT } from "@/components/QuantumHFT";
import { VoiceTradeAssistant } from "@/components/VoiceTradeAssistant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, TrendingUp, PieChart, Brain, Bot, LineChart, Cpu, Mic } from "lucide-react";

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

        <Tabs defaultValue="market" className="space-y-4">
          <TabsList className="grid grid-cols-2 sm:grid-cols-6 w-full max-w-4xl">
            <TabsTrigger value="market">Market Analysis</TabsTrigger>
            <TabsTrigger value="ml" className="flex items-center gap-1">
              <Bot className="h-4 w-4" />
              ML Trading
            </TabsTrigger>
            <TabsTrigger value="quantum" className="flex items-center gap-1">
              <Cpu className="h-4 w-4" />
              Quantum AI
            </TabsTrigger>
            <TabsTrigger value="patterns">Pattern Recognition</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
            <TabsTrigger value="voice" className="flex items-center gap-1">
              <Mic className="h-4 w-4" />
              Voice Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market" className="grid md:grid-cols-2 gap-6">
            <PortfolioAnalytics />
            <AIInsights />
          </TabsContent>
          
          <TabsContent value="ml" className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <TradingAgent />
              <BacktestEngine />
            </div>
          </TabsContent>
          
          <TabsContent value="quantum" className="grid md:grid-cols-2 gap-6">
            <QuantumHFT />
            <QuantumOptimization />
          </TabsContent>
          
          <TabsContent value="patterns" className="grid md:grid-cols-2 gap-6">
            <ChartPatternRecognition />
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  Historical Pattern Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Pattern recognition utilizes vision transformers to identify key market patterns and predict potential moves based on historical data.
                </p>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Head and Shoulders</div>
                    <p className="text-sm text-muted-foreground">A bearish reversal pattern that signals a bullish trend is coming to an end.</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Double Bottom</div>
                    <p className="text-sm text-muted-foreground">A bullish reversal pattern that occurs after a downtrend.</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Cup and Handle</div>
                    <p className="text-sm text-muted-foreground">A bullish continuation pattern that signals a pause in an uptrend.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sentiment" className="grid md:grid-cols-2 gap-6">
            <SentimentAnalysis />
            <Card>
              <CardHeader>
                <CardTitle>Market Sentiment Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  AI models analyze news, social media, and financial reports to gauge market sentiment and predict potential price movements.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Fear & Greed Index</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Neutral (45)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">News Sentiment</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Positive</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Social Media Buzz</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Institutional Sentiment</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Bullish</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="voice" className="grid md:grid-cols-2 gap-6">
            <VoiceTradeAssistant />
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  AI Assistant Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Your AI trading assistant is powered by advanced natural language processing and voice recognition technology.
                </p>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Market Analysis</div>
                    <p className="text-sm text-muted-foreground">Get real-time insights about market trends, sentiment, and price movements.</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Trade Execution</div>
                    <p className="text-sm text-muted-foreground">Place orders, set limits, and execute trades using simple voice commands.</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Portfolio Management</div>
                    <p className="text-sm text-muted-foreground">Check balances, track performance, and get rebalancing recommendations.</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Alerting System</div>
                    <p className="text-sm text-muted-foreground">Set up custom price alerts and notifications for important market events.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
