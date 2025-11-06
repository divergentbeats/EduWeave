import { Database, Cpu, Lightbulb, TrendingUp, MessageSquare, LayoutDashboard } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data",
    description: "Collect student data from multiple sources",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Cpu,
    title: "Processing",
    description: "Clean and structure the data",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Lightbulb,
    title: "AI Insights",
    description: "Generate personalized insights",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Predictions",
    description: "Forecast academic trajectories",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: MessageSquare,
    title: "AI Echo",
    description: "Interactive chatbot assistance",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: LayoutDashboard,
    title: "Output Dashboard",
    description: "Visual representation of insights",
    color: "from-rose-500 to-rose-600"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            ⚡ Process
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            How <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">EduWeave</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From raw data to actionable insights - our AI-powered pipeline transforms your academic information
          </p>
        </div>

        {/* Flow Diagram - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-rose-200 -translate-y-1/2 rounded-full" />
            
            {/* Steps */}
            <div className="grid grid-cols-6 gap-4 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    {/* Icon Container */}
                    <div className="relative group mb-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 relative z-10`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                    </div>

                    {/* Step Number */}
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center mb-3 shadow-sm" style={{ fontWeight: 600 }}>
                      {index + 1}
                    </div>

                    {/* Content */}
                    <h4 className="mb-2 text-center" style={{ fontWeight: 600 }}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow (except last item) */}
                    {index < steps.length - 1 && (
                      <svg 
                        className="absolute top-10 left-[calc(50%+2.5rem)] w-8 h-8 text-purple-400 animate-pulse" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Flow Diagram - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-xs" style={{ fontWeight: 600 }}>
                        {index + 1}
                      </div>
                      <h4 style={{ fontWeight: 600 }}>{step.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Arrow Down */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg className="w-6 h-6 text-purple-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
            <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Ready to experience the future?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Join thousands of students already using EduWeave to enhance their academic journey
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
