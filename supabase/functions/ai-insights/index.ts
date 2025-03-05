
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, type, imageUrl, chartData, newsText } = await req.json();
    
    let systemPrompt = '';
    switch (type) {
      case 'portfolio':
        systemPrompt = 'You are a quantum-safe financial advisor. Analyze portfolios and provide secure recommendations.';
        break;
      case 'security':
        systemPrompt = 'You are a quantum security expert. Provide post-quantum cryptography insights and security recommendations.';
        break;
      case 'file':
        systemPrompt = 'You are a secure file analysis expert. Analyze documents and provide insights while maintaining quantum-resistant security standards.';
        break;
      case 'sentiment':
        systemPrompt = 'You are a financial sentiment analysis expert. Analyze financial news and social media to provide sentiment insights.';
        break;
      case 'pattern':
        systemPrompt = 'You are a technical chart pattern recognition expert. Identify patterns in financial charts and provide trading insights.';
        break;
      case 'multimodal':
        systemPrompt = 'You are a multimodal financial analysis expert. Combine text, image, and numerical data to provide comprehensive financial insights.';
        break;
      default:
        systemPrompt = 'You are a quantum-safe AI assistant providing secure financial insights.';
    }

    // Build the user message content
    let messageContent = prompt || '';
    
    // For multimodal requests with images
    const messages = [
      { role: 'system', content: systemPrompt }
    ];
    
    if (type === 'multimodal' && imageUrl) {
      messages.push({
        role: 'user',
        content: [
          { type: 'text', text: messageContent },
          { type: 'image_url', image_url: { url: imageUrl } }
        ]
      });
    } else if (type === 'sentiment' && newsText) {
      // For sentiment analysis with news text
      messages.push({
        role: 'user', 
        content: `Analyze the sentiment of this financial news: ${newsText}\n\n${messageContent}`
      });
    } else if (type === 'pattern' && chartData) {
      // For pattern recognition with chart data
      messages.push({
        role: 'user',
        content: `Analyze this financial chart data for patterns: ${JSON.stringify(chartData)}\n\n${messageContent}`
      });
    } else {
      // Standard text-only prompt
      messages.push({ role: 'user', content: messageContent });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: type === 'multimodal' ? 'gpt-4o' : 'gpt-4o-mini',
        messages: messages,
      }),
    });

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
