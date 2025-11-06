import { Brain, MessageSquare, Route, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Insights",
    description: "Personalized academic feedback and progress reflection powered by advanced machine learning algorithms.",
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: MessageSquare,
    title: "AI Echo",
    description: "Intelligent chatbot that answers questions from college archives and provides instant academic support.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Route,
    title: "Predictive Path Builder",
    description: "Forecasts career paths and suggests optimal electives based on your academic journey and goals.",
    gradient: "from-violet-500 to-violet-600"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "A shared space for students to discuss projects, showcase achievements, and find mentorships.",
    gradient: "from-pink-500 to-pink-600"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            ✨ Features
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            AI-Powered Tools for
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Academic Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your full potential with intelligent features designed to transform your learning experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3)) border-box'
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
