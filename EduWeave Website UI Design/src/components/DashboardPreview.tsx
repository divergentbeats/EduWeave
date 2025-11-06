import { BarChart3, TrendingUp, Calendar, MessageCircle, Award, Target } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 mb-4">
            🎯 Dashboard
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Data about you →
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> AI that thinks for you</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a comprehensive view of your academic journey with real-time insights and AI-driven recommendations
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Dashboard Container */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Academic Dashboard</h3>
                  <p className="text-indigo-100 mt-1">Welcome back, Student!</p>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                  Semester 6
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Left Column - Stats */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-600">CGPA</span>
                      </div>
                      <div className="text-3xl text-indigo-600" style={{ fontWeight: 700 }}>8.7</div>
                      <div className="text-sm text-green-600 mt-1">↑ 0.3 from last sem</div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-600">Attendance</span>
                      </div>
                      <div className="text-3xl text-purple-600" style={{ fontWeight: 700 }}>92%</div>
                      <div className="text-sm text-green-600 mt-1">Above target</div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-indigo-600" />
                      <h4 style={{ fontWeight: 600 }}>Semester Performance</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        { subject: "Machine Learning", score: 95, color: "bg-indigo-500" },
                        { subject: "Data Structures", score: 88, color: "bg-purple-500" },
                        { subject: "Database Systems", score: 92, color: "bg-violet-500" },
                        { subject: "Web Development", score: 85, color: "bg-pink-500" }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="text-gray-700">{item.subject}</span>
                            <span className="text-gray-600" style={{ fontWeight: 600 }}>{item.score}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${item.color} rounded-full transition-all duration-500`}
                              style={{ width: `${item.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Insights Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="mb-2" style={{ fontWeight: 600 }}>AI Insight</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Your performance in Machine Learning is exceptional! Consider exploring advanced topics like Neural Networks. 
                          You're on track for honors graduation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - AI Chatbot */}
                <div className="space-y-6">
                  {/* Chatbot Panel */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageCircle className="w-5 h-5 text-indigo-600" />
                      <h4 style={{ fontWeight: 600 }}>AI Echo</h4>
                    </div>

                    <div className="space-y-3 mb-4">
                      {/* AI Message */}
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">AI</span>
                        </div>
                        <div className="bg-indigo-50 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                          <p className="text-sm text-gray-700">How can I help you today?</p>
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="flex gap-2 justify-end">
                        <div className="bg-gray-100 rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                          <p className="text-sm text-gray-700">Show my attendance</p>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">AI</span>
                        </div>
                        <div className="bg-indigo-50 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                          <p className="text-sm text-gray-700">Your current attendance is 92%. You're doing great!</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Ask me anything..."
                          className="flex-1 px-4 py-2 rounded-full bg-gray-100 border-none outline-none text-sm"
                        />
                        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Goals Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-green-600" />
                      <h4 style={{ fontWeight: 600 }}>Next Goal</h4>
                    </div>
                    <p className="text-sm text-gray-700">Complete ML project by Nov 15</p>
                    <div className="mt-3 h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: '65%' }} />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">65% complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-purple-400 opacity-50 blur-xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-indigo-400 opacity-50 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
}
