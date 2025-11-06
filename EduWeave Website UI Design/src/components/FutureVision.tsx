import { Users2, Github, RefreshCw, Sparkles, Zap, Globe } from "lucide-react";

const upcomingFeatures = [
  {
    icon: Users2,
    title: "Faculty Dashboard",
    description: "Comprehensive analytics for educators to track class performance and student engagement",
    status: "Coming Q1 2026",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Automatic project tracking and code contribution analysis for tech students",
    status: "Coming Q2 2026",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: RefreshCw,
    title: "Real-time ERP Sync",
    description: "Instant data synchronization with institutional ERP systems for live updates",
    status: "Coming Q2 2026",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: Zap,
    title: "Smart Notifications",
    description: "AI-powered alerts for deadlines, opportunities, and personalized reminders",
    status: "Coming Q3 2026",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Globe,
    title: "Multi-Campus Network",
    description: "Connect and collaborate with students across different institutions",
    status: "Coming Q3 2026",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: Sparkles,
    title: "Advanced AI Models",
    description: "Next-generation predictive analytics and personalized learning recommendations",
    status: "Coming Q4 2026",
    color: "from-amber-500 to-amber-600"
  }
];

export function FutureVision() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-4">
            🚀 Future Vision
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Integrating AI into
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Every Classroom
            </span>
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            We're constantly innovating to bring you the most advanced educational intelligence platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {upcomingFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-indigo-200 mb-3">
                    {feature.status}
                  </div>

                  {/* Content */}
                  <h4 className="mb-2 text-white" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    {feature.title}
                  </h4>
                  <p className="text-indigo-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
                Shape the Future of Education with Us
              </h3>
              <p className="text-lg text-indigo-100 mb-8">
                Join our early access program and be the first to experience upcoming features. 
                Your feedback helps us build better tools for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ fontWeight: 600 }}>
                  Request Early Access
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300" style={{ fontWeight: 600 }}>
                  View Roadmap
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-pink-400 opacity-50 blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-indigo-400 opacity-50 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-center mb-12" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
            Development Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  { quarter: "Q1 2026", items: ["Faculty Dashboard", "Advanced Analytics"] },
                  { quarter: "Q2 2026", items: ["GitHub Integration", "Real-time ERP Sync"] },
                  { quarter: "Q3 2026", items: ["Smart Notifications", "Multi-Campus Network"] },
                  { quarter: "Q4 2026", items: ["Advanced AI Models", "Mobile App Launch"] }
                ].map((timeline, index) => (
                  <div key={index} className="relative">
                    <div className="md:flex items-center">
                      {/* Quarter Badge */}
                      <div className="md:w-1/2 md:text-right md:pr-12 mb-4 md:mb-0">
                        <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" style={{ fontWeight: 600 }}>
                          {timeline.quarter}
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-white rounded-full border-4 border-indigo-900 transform -translate-x-1/2" />

                      {/* Items */}
                      <div className="md:w-1/2 md:pl-12">
                        <div className="space-y-2">
                          {timeline.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-indigo-200">
                              <div className="w-2 h-2 bg-purple-400 rounded-full" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
