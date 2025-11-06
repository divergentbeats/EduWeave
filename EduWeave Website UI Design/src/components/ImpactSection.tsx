import { GraduationCap, Users2, Building2 } from "lucide-react";

const impacts = [
  {
    icon: GraduationCap,
    title: "Empowers Students with Clarity",
    description: "Students gain deep insights into their academic performance, learning patterns, and career trajectories, enabling them to make informed decisions about their educational journey.",
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100"
  },
  {
    icon: Users2,
    title: "Enables Data-Driven Mentoring for Faculty",
    description: "Faculty members can leverage comprehensive analytics to provide personalized guidance, identify at-risk students early, and optimize teaching strategies for better outcomes.",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100"
  },
  {
    icon: Building2,
    title: "Builds Smarter, Sustainable Campuses",
    description: "Institutions can make strategic decisions based on data insights, improve resource allocation, enhance student retention, and create a more efficient educational ecosystem.",
    gradient: "from-violet-500 to-violet-600",
    bgGradient: "from-violet-50 to-violet-100"
  }
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-600 mb-4">
            🌟 Impact
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Transforming Education
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Across All Levels
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EduWeave creates a ripple effect of positive change throughout the entire educational ecosystem
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${impact.gradient}`} />

                  {/* Icon with Animated Background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${impact.bgGradient} rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${impact.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, lineHeight: 1.3 }}>
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {impact.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${impact.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-indigo-100 text-center shadow-lg">
            <div className="text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2" style={{ fontWeight: 800 }}>
              40%
            </div>
            <p className="text-gray-600">Improved Student Engagement</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-purple-100 text-center shadow-lg">
            <div className="text-4xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2" style={{ fontWeight: 800 }}>
              85%
            </div>
            <p className="text-gray-600">Faculty Satisfaction</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-violet-100 text-center shadow-lg">
            <div className="text-4xl bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent mb-2" style={{ fontWeight: 800 }}>
              30%
            </div>
            <p className="text-gray-600">Better Resource Allocation</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-pink-100 text-center shadow-lg">
            <div className="text-4xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2" style={{ fontWeight: 800 }}>
              25%
            </div>
            <p className="text-gray-600">Increased Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
