import { Sparkles, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const insights = [
  "Focus on DBMS attendance 📉. You're at 78% - aim for 85% to stay safe.",
  "Your ML performance is excellent! Consider exploring NLP projects next.",
  "Great consistency in Web Dev! Try contributing to open-source projects.",
  "Consider joining the AI research club - it aligns with your interests."
];

export function AIInsightsCard() {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const regenerateInsight = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 style={{ fontWeight: 700 }}>AI Insights</h4>
              <p className="text-sm text-indigo-100">Personalized for you</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={regenerateInsight}
            disabled={isRefreshing}
            className="text-white hover:bg-white/20 rounded-full"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Insight Content */}
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
          <p className="text-lg leading-relaxed">
            {insights[currentInsight]}
          </p>
        </div>

        {/* Action Suggestions */}
        <div className="space-y-2">
          <div className="text-sm text-indigo-100 mb-2" style={{ fontWeight: 600 }}>
            Recommended Actions:
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-sm transition-all duration-200 hover:scale-105">
              View Attendance
            </button>
            <button className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-sm transition-all duration-200 hover:scale-105">
              Explore Projects
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
          <div>
            <div className="text-2xl mb-1" style={{ fontWeight: 700 }}>24</div>
            <div className="text-xs text-indigo-100">Insights Generated</div>
          </div>
          <div>
            <div className="text-2xl mb-1" style={{ fontWeight: 700 }}>18</div>
            <div className="text-xs text-indigo-100">Actions Taken</div>
          </div>
        </div>
      </div>
    </div>
  );
}
