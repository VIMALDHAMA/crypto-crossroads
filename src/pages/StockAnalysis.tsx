
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartUploader } from "@/components/ChartUploader";
import { TechnicalAnalysisReport } from "@/components/TechnicalAnalysisReport";
import { Chart, TrendingUp, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StockAnalysis = () => {
  const [analysisResult, setAnalysisResult] = useState<string[] | null>(null);
  const [chartImage, setChartImage] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-2 rounded-lg bg-primary/10">
          <TrendingUp className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
          Stock Technical Analysis
        </h1>
      </div>

      <Tabs defaultValue="upload" className="space-y-8">
        <TabsList className="grid grid-cols-2 max-w-md bg-background/80 backdrop-blur-sm p-1 rounded-xl">
          <TabsTrigger value="upload" className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-indigo-500/80 data-[state=active]:text-white">
            <Chart className="h-4 w-4" />
            Chart Upload
          </TabsTrigger>
          <TabsTrigger value="patterns" className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-indigo-500/80 data-[state=active]:text-white">
            <BookOpen className="h-4 w-4" />
            Pattern Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <div className="grid gap-6 md:grid-cols-2">
            <ChartUploader 
              onAnalysisComplete={(results, image, conf) => {
                setAnalysisResult(results);
                setChartImage(image);
                setConfidence(conf);
              }}
            />
            {analysisResult && chartImage && (
              <TechnicalAnalysisReport 
                results={analysisResult} 
                chartImage={chartImage}
                confidence={confidence}
              />
            )}
          </div>
        </TabsContent>

        <TabsContent value="patterns">
          <Card>
            <CardHeader>
              <CardTitle>Common Chart Patterns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {chartPatterns.map((pattern) => (
                  <Card key={pattern.name} className="overflow-hidden">
                    <div className="p-2 bg-muted/50">
                      <h3 className="font-medium">{pattern.name}</h3>
                    </div>
                    <CardContent className="p-4 text-sm">
                      <p className="mb-2">{pattern.description}</p>
                      <div className="text-xs font-medium">
                        <span className={pattern.action === "Buy" ? "text-green-600" : "text-red-600"}>
                          {pattern.action} Signal
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Common chart patterns data
const chartPatterns = [
  {
    name: "Double Top",
    description: "A bearish reversal pattern that forms after an uptrend. Price reaches a high, pulls back, then reaches a similar high before declining.",
    action: "Sell"
  },
  {
    name: "Double Bottom",
    description: "A bullish reversal pattern that forms after a downtrend. Price reaches a low, rebounds, then reaches a similar low before rising.",
    action: "Buy"
  },
  {
    name: "Head and Shoulders",
    description: "A bearish reversal pattern with three peaks, the middle one (head) being the highest. Signals a likely downtrend after completion.",
    action: "Sell"
  },
  {
    name: "Inverse Head and Shoulders",
    description: "A bullish reversal pattern with three troughs, the middle one being the lowest. Signals a likely uptrend after completion.",
    action: "Buy"
  },
  {
    name: "Cup and Handle",
    description: "A bullish continuation pattern resembling a cup with a handle. Signals a potential upward breakout after consolidation.",
    action: "Buy"
  },
  {
    name: "Bull Flag",
    description: "A bullish continuation pattern that forms after a strong upward move, followed by a consolidation period.",
    action: "Buy"
  }
];

export default StockAnalysis;
