import { AIChatPanel } from "../dashboard/AIChatPanel";
import { Sparkles, TrendingUp, MessageSquare, Zap } from "lucide-react";

const quickActions = [
  { icon: MessageSquare, label: "View Past Projects", color: "from-indigo-500 to-indigo-600" },
  { icon: TrendingUp, label: "Check Placement Stats", color: "from-purple-500 to-purple-600" },
  { icon: Sparkles, label: "Workshop Schedule", color: "from-violet-500 to-violet-600" },
  { icon: Zap, label: "Skill Recommendations", color: "from-pink-500 to-pink-600" }
];

const popularQueries = [
  "What workshops are happening this month?",
  "Show my AI/ML project history",
  "Which companies visited for placements last year?",
  "What skills should I learn for ML roles?",
  "Tell me about research opportunities",
  "How to improve my CGPA?"
];

const insights = [
  {
    title: "Recent Activity",
    items: [
      "Asked about NLP projects - 2 hours ago",
      "Checked placement statistics - Yesterday",
      "Explored workshop recommendations - 2 days ago"
    ]
  },
  {
    title: "Trending Topics",
    items: [
      "Machine Learning Internships",
      "Deep Learning Workshops",
      "Placement Preparation Tips"
    ]
  }
];

export function AIEchoPage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700 }}>
          AI Echo Chatbot
        </h1>
        <p className="text-gray-600">Your intelligent academic assistant - ask anything about projects, events, placements, and more</p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chat Panel - Main Area */}
        <div className="lg:col-span-8">
          <div className="h-[calc(100vh-16rem)]">
            <AIChatPanel />
          </div>
        </div>

        {/* Sidebar - Quick Actions and Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Actions */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
            <h3 className="mb-4" style={{ fontWeight: 700 }}>Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 600 }}>
                      {action.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Popular Queries */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 shadow-lg">
            <h3 className="mb-4" style={{ fontWeight: 700 }}>Popular Queries</h3>
            <div className="space-y-2">
              {popularQueries.map((query, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-indigo-200 hover:border-indigo-400 hover:bg-white transition-all duration-200 text-sm text-gray-700 hover:text-indigo-600"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          {/* Activity & Trending */}
          {insights.map((section, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <h3 className="mb-4" style={{ fontWeight: 700 }}>{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Stats Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
            <h3 className="mb-4" style={{ fontWeight: 700 }}>Chat Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-indigo-100 text-sm">Total Conversations</span>
                <span className="text-2xl" style={{ fontWeight: 700 }}>47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-indigo-100 text-sm">Questions Asked</span>
                <span className="text-2xl" style={{ fontWeight: 700 }}>128</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-indigo-100 text-sm">Helpful Responses</span>
                <span className="text-2xl" style={{ fontWeight: 700 }}>95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h3 className="mb-2" style={{ fontWeight: 700 }}>Smart Search</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Search through your entire academic history - projects, events, workshops, and placements
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="mb-2" style={{ fontWeight: 700 }}>Contextual Insights</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Get personalized recommendations based on your academic profile and career goals
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="mb-2" style={{ fontWeight: 700 }}>Instant Answers</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lightning-fast responses powered by AI trained on your college's academic data
          </p>
        </div>
      </div>
    </div>
  );
}
