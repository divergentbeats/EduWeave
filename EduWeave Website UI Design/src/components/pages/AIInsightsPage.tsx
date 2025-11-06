import { Sparkles, RefreshCw, Calendar, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const insightsData = [
  {
    category: "Academic Performance",
    insight: "Your CGPA has shown consistent improvement over the past 3 semesters. Continue this trajectory by maintaining focus on core subjects like DBMS and Computer Networks.",
    type: "positive",
    priority: "medium"
  },
  {
    category: "Attendance",
    insight: "DBMS attendance is currently at 78%, which is below the safe threshold. Attend the next 3 classes to reach 82% and avoid any academic penalties.",
    type: "warning",
    priority: "high"
  },
  {
    category: "Project Portfolio",
    insight: "You have strong expertise in AI/ML with 5 completed projects. Consider diversifying into Cloud Computing or DevOps to make your profile more well-rounded for placements.",
    type: "suggestion",
    priority: "medium"
  },
  {
    category: "Skill Development",
    insight: "Your proficiency in Python and Machine Learning is excellent. Learning containerization (Docker/Kubernetes) would complement your existing skillset perfectly.",
    type: "suggestion",
    priority: "low"
  },
  {
    category: "Career Path",
    insight: "Based on your academic performance and project portfolio, you're on track for Machine Learning Engineer roles at top tech companies. Strengthen your DSA skills for interviews.",
    type: "positive",
    priority: "high"
  }
];

const growthMetrics = [
  { label: "Academic Growth", value: 92, trend: "+8%", color: "indigo" },
  { label: "Skill Acquisition", value: 88, trend: "+12%", color: "purple" },
  { label: "Project Quality", value: 90, trend: "+5%", color: "violet" },
  { label: "Career Readiness", value: 85, trend: "+15%", color: "pink" }
];

export function AIInsightsPage() {
  const [lastUpdated, setLastUpdated] = useState("2 hours ago");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated("Just now");
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700 }}>
            AI Insights
          </h1>
          <p className="text-gray-600">Personalized feedback and growth recommendations</p>
        </div>
        <Button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Regenerate Insights
        </Button>
      </div>

      {/* Main AI Mentor Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white shadow-xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Your AI Mentor's Feedback</h2>
                <p className="text-indigo-100 flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4" />
                  Last updated: {lastUpdated}
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-lg leading-relaxed mb-4">
              Overall, you're demonstrating strong academic performance with a clear trajectory toward becoming a Machine Learning Engineer. Your project portfolio is impressive, but there are key areas that need immediate attention to maximize your potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl mb-2" style={{ fontWeight: 800 }}>A+</div>
                <div className="text-sm text-indigo-100">Overall Grade</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl mb-2" style={{ fontWeight: 800 }}>5</div>
                <div className="text-sm text-indigo-100">Key Insights</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl mb-2" style={{ fontWeight: 800 }}>2</div>
                <div className="text-sm text-indigo-100">Action Items</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {growthMetrics.map((metric, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl bg-gradient-to-br from-${metric.color}-50 to-${metric.color}-100 border border-${metric.color}-200 shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm text-gray-600" style={{ fontWeight: 600 }}>{metric.label}</h4>
              <TrendingUp className={`w-5 h-5 text-${metric.color}-600`} />
            </div>
            <div className="flex items-end justify-between">
              <div className={`text-4xl text-${metric.color}-600`} style={{ fontWeight: 800 }}>
                {metric.value}%
              </div>
              <div className="text-green-600 text-sm" style={{ fontWeight: 600 }}>
                {metric.trend}
              </div>
            </div>
            <div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
              <div
                className={`h-full bg-${metric.color}-600 rounded-full transition-all duration-1000`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Insights */}
      <div>
        <h2 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Detailed Analysis</h2>
        <div className="space-y-4">
          {insightsData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                item.type === "positive"
                  ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                  : item.type === "warning"
                  ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200"
                  : "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.type === "positive"
                    ? "bg-gradient-to-br from-green-500 to-emerald-500"
                    : item.type === "warning"
                    ? "bg-gradient-to-br from-amber-500 to-orange-500"
                    : "bg-gradient-to-br from-indigo-500 to-purple-500"
                }`}>
                  {item.type === "positive" ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : item.type === "warning" ? (
                    <AlertTriangle className="w-6 h-6 text-white" />
                  ) : (
                    <Sparkles className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 style={{ fontWeight: 700 }}>{item.category}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      item.priority === "high"
                        ? "bg-red-100 text-red-700 border border-red-300"
                        : item.priority === "medium"
                        ? "bg-amber-100 text-amber-700 border border-amber-300"
                        : "bg-blue-100 text-blue-700 border border-blue-300"
                    }`}>
                      {item.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.insight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Improvement Tips Summary */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
        <h3 className="mb-4" style={{ fontWeight: 700 }}>Recommended Actions This Week</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-sm" style={{ fontWeight: 700 }}>
              1
            </div>
            <div>
              <h4 className="mb-1" style={{ fontWeight: 600 }}>Improve DBMS Attendance</h4>
              <p className="text-sm text-gray-600">Attend next 3 classes to reach safe threshold</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-sm" style={{ fontWeight: 700 }}>
              2
            </div>
            <div>
              <h4 className="mb-1" style={{ fontWeight: 600 }}>Start NLP Project</h4>
              <p className="text-sm text-gray-600">Diversify your AI portfolio with language processing</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200">
            <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center flex-shrink-0 text-sm" style={{ fontWeight: 700 }}>
              3
            </div>
            <div>
              <h4 className="mb-1" style={{ fontWeight: 600 }}>Practice DSA Daily</h4>
              <p className="text-sm text-gray-600">30 minutes daily for placement preparation</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200">
            <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center flex-shrink-0 text-sm" style={{ fontWeight: 700 }}>
              4
            </div>
            <div>
              <h4 className="mb-1" style={{ fontWeight: 600 }}>Learn Docker Basics</h4>
              <p className="text-sm text-gray-600">Complement your development skills with DevOps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
