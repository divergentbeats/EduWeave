import { Code2, Plus, Calendar, GitBranch, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const projects = [
  {
    title: "NLP Sentiment Analyzer",
    domain: "AI/ML",
    description: "Built a sentiment analysis model using BERT for social media data",
    tags: ["Python", "TensorFlow", "NLP", "BERT"],
    date: "Oct 2024",
    status: "Completed",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Smart Campus IoT System",
    domain: "IoT",
    description: "Developed an automated attendance and energy monitoring system",
    tags: ["Arduino", "IoT", "Node.js", "MongoDB"],
    date: "Sep 2024",
    status: "Completed",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "E-Commerce MERN Platform",
    domain: "Web Dev",
    description: "Full-stack online shopping platform with payment integration",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    date: "Aug 2024",
    status: "Completed",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI Resume Optimizer",
    domain: "AI/ML",
    description: "ML-based tool to analyze and optimize resumes for ATS systems",
    tags: ["Python", "Machine Learning", "Flask"],
    date: "Nov 2024",
    status: "In Progress",
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Real-time Chat Application",
    domain: "Web Dev",
    description: "WebSocket-based chat app with end-to-end encryption",
    tags: ["React", "Socket.io", "WebRTC"],
    date: "Jul 2024",
    status: "Completed",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Computer Vision Parking System",
    domain: "AI/ML",
    description: "Automated parking slot detection using CNN",
    tags: ["Python", "OpenCV", "Deep Learning"],
    date: "Jun 2024",
    status: "Completed",
    color: "from-orange-500 to-red-500"
  }
];

const projectData = [
  { name: "AI/ML", value: 45, color: "#6366f1" },
  { name: "Web Dev", value: 35, color: "#a855f7" },
  { name: "IoT", value: 20, color: "#8b5cf6" }
];

const skills = [
  { name: "Python", level: 95, category: "Programming" },
  { name: "React", level: 90, category: "Web" },
  { name: "Machine Learning", level: 88, category: "AI" },
  { name: "TensorFlow", level: 85, category: "AI" },
  { name: "Node.js", level: 87, category: "Backend" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "Deep Learning", level: 80, category: "AI" },
  { name: "Arduino", level: 75, category: "IoT" },
  { name: "NLP", level: 83, category: "AI" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "Git", level: 92, category: "Tools" },
  { name: "TypeScript", level: 85, category: "Programming" }
];

export function ProjectsSkillsPage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700 }}>
            Projects & Skills
          </h1>
          <p className="text-gray-600">Your technical portfolio and skill development</p>
        </div>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl">
          <Plus className="w-4 h-4 mr-2" />
          Add New Project
        </Button>
      </div>

      {/* AI Tip Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="mb-2" style={{ fontWeight: 700 }}>AI Recommendation</h3>
            <p className="text-indigo-100 leading-relaxed">
              You've completed 3 AI/ML projects with excellent results! Consider exploring <span style={{ fontWeight: 600 }}>Natural Language Processing (NLP)</span> or <span style={{ fontWeight: 600 }}>Computer Vision</span> for your next project to diversify your portfolio.
            </p>
          </div>
        </div>
      </div>

      {/* Project Portfolio */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Project Portfolio</h2>
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>All Domains</option>
              <option>AI/ML</option>
              <option>Web Dev</option>
              <option>IoT</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    project.status === "Completed" 
                      ? "bg-green-100 text-green-700 border border-green-300" 
                      : "bg-amber-100 text-amber-700 border border-amber-300"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-2 group-hover:text-indigo-600 transition-colors" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs border border-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                <button className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors group/link">
                  View Details
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Domain Distribution */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
          <h3 className="mb-6" style={{ fontWeight: 700 }}>Domain Distribution</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {projectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills List */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
          <h3 className="mb-6" style={{ fontWeight: 700 }}>Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ fontWeight: 600 }}>{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-center">
          <div className="text-3xl text-indigo-600 mb-1" style={{ fontWeight: 800 }}>12</div>
          <div className="text-sm text-gray-600">Total Projects</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 text-center">
          <div className="text-3xl text-purple-600 mb-1" style={{ fontWeight: 800 }}>18</div>
          <div className="text-sm text-gray-600">Skills Mastered</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 text-center">
          <div className="text-3xl text-violet-600 mb-1" style={{ fontWeight: 800 }}>5</div>
          <div className="text-sm text-gray-600">Domains Explored</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 text-center">
          <div className="text-3xl text-pink-600 mb-1" style={{ fontWeight: 800 }}>87%</div>
          <div className="text-sm text-gray-600">Avg Skill Level</div>
        </div>
      </div>
    </div>
  );
}
