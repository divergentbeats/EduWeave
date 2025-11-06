import { Compass, Target, Briefcase, GraduationCap, TrendingUp, ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";

const careerPath = [
  { 
    stage: "Current Position",
    title: "6th Semester CSE Student",
    description: "Strong foundation in AI/ML with 12 projects",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    status: "current"
  },
  { 
    stage: "Next 6 Months",
    title: "Advanced AI Specialization",
    description: "Complete NLP electives, ML internship",
    icon: Target,
    color: "from-indigo-500 to-purple-500",
    status: "upcoming"
  },
  { 
    stage: "1 Year",
    title: "ML Engineering Internship",
    description: "Hands-on industry experience at tech companies",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    status: "future"
  },
  { 
    stage: "2-3 Years",
    title: "Machine Learning Engineer",
    description: "Full-time role in AI/ML teams",
    icon: TrendingUp,
    color: "from-violet-500 to-indigo-500",
    status: "future"
  }
];

const recommendedElectives = [
  { 
    name: "Natural Language Processing",
    match: 95,
    semester: "7th Sem",
    reason: "Aligns with your AI/ML focus and complements existing projects",
    prerequisites: ["Machine Learning", "Python"],
    difficulty: "Advanced"
  },
  { 
    name: "Advanced Deep Learning",
    match: 92,
    semester: "7th Sem",
    reason: "Build on your ML foundation with cutting-edge neural networks",
    prerequisites: ["Machine Learning", "Linear Algebra"],
    difficulty: "Advanced"
  },
  { 
    name: "Cloud Computing & DevOps",
    match: 88,
    semester: "8th Sem",
    reason: "Essential for deploying ML models at scale",
    prerequisites: ["None"],
    difficulty: "Intermediate"
  },
  { 
    name: "Big Data Analytics",
    match: 85,
    semester: "8th Sem",
    reason: "Process large datasets for ML applications",
    prerequisites: ["Database Systems"],
    difficulty: "Intermediate"
  }
];

const internshipRecommendations = [
  {
    company: "Google AI Research",
    role: "ML Research Intern",
    match: 88,
    location: "Bangalore",
    duration: "3-6 months",
    skills: ["Python", "TensorFlow", "Research"]
  },
  {
    company: "Microsoft",
    role: "AI/ML Engineering Intern",
    match: 85,
    location: "Hyderabad",
    duration: "6 months",
    skills: ["Python", "Azure", "ML"]
  },
  {
    company: "Amazon",
    role: "Applied Scientist Intern",
    match: 82,
    location: "Bangalore",
    duration: "5 months",
    skills: ["ML", "Python", "AWS"]
  }
];

export function PredictivePathPage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700 }}>
          Predictive Career Path
        </h1>
        <p className="text-gray-600">AI-powered roadmap tailored to your strengths and goals</p>
      </div>

      {/* Main Career Prediction Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white shadow-xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
              <Compass className="w-10 h-10" />
            </div>
            <div>
              <div className="text-sm text-indigo-100 mb-1">AI-Predicted Career Path</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
                Machine Learning Engineer
              </h2>
            </div>
          </div>

          {/* Confidence Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-sm text-indigo-100 mb-2">Match Confidence</div>
              <div className="flex items-end gap-2">
                <div className="text-3xl" style={{ fontWeight: 800 }}>93%</div>
                <Star className="w-5 h-5 text-yellow-300 mb-1" />
              </div>
              <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full" style={{ width: '93%' }} />
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-sm text-indigo-100 mb-2">Salary Range (Entry)</div>
              <div className="text-3xl" style={{ fontWeight: 800 }}>₹12-18L</div>
              <div className="text-xs text-indigo-100 mt-2">Per annum in India</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-sm text-indigo-100 mb-2">Job Market</div>
              <div className="text-3xl" style={{ fontWeight: 800 }}>12.5K+</div>
              <div className="text-xs text-indigo-100 mt-2">Open positions</div>
            </div>
          </div>

          {/* CTA */}
          <Button className="w-full md:w-auto bg-white text-purple-600 hover:bg-indigo-50 rounded-xl px-8 py-3">
            Download Full Career Roadmap
          </Button>
        </div>
      </div>

      {/* Career Path Visualization */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
        <h2 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Your Journey Timeline</h2>
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden md:block" />

          {/* Path Nodes */}
          <div className="space-y-6">
            {careerPath.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-xl border-2 transition-all duration-300 ${
                    node.status === "current"
                      ? "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 shadow-md"
                      : node.status === "upcoming"
                      ? "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300"
                      : "bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200"
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-gray-600 mb-1" style={{ fontWeight: 600 }}>{node.stage}</div>
                        <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>{node.title}</h3>
                      </div>
                      {node.status === "current" && (
                        <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs" style={{ fontWeight: 600 }}>
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700">{node.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recommended Electives */}
      <div>
        <h2 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Recommended Electives</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recommendedElectives.map((elective, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="mb-2 group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 700 }}>
                    {elective.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-600 border border-indigo-200">
                      {elective.semester}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-600 border border-purple-200">
                      {elective.difficulty}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent" style={{ fontWeight: 800 }}>
                    {elective.match}%
                  </div>
                  <div className="text-xs text-gray-500">Match</div>
                </div>
              </div>

              {/* Reason */}
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{elective.reason}</p>

              {/* Prerequisites */}
              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-2" style={{ fontWeight: 600 }}>Prerequisites:</div>
                <div className="flex flex-wrap gap-2">
                  {elective.prerequisites.map((prereq, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
                      {prereq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Match Progress */}
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000"
                  style={{ width: `${elective.match}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internship Recommendations */}
      <div>
        <h2 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Recommended Internships</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {internshipRecommendations.map((internship, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="mb-2" style={{ fontWeight: 700 }}>{internship.company}</h3>
                <div className="text-sm text-gray-600 mb-1">{internship.role}</div>
                <div className="text-xs text-gray-500">{internship.location} • {internship.duration}</div>
              </div>

              {/* Match Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Profile Match</span>
                  <span className="text-indigo-600" style={{ fontWeight: 600 }}>{internship.match}%</span>
                </div>
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    style={{ width: `${internship.match}%` }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-2" style={{ fontWeight: 600 }}>Required Skills:</div>
                <div className="flex flex-wrap gap-1">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full rounded-xl border-indigo-300 hover:bg-indigo-50 group">
                View Details
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
