import { Code2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const projectData = [
  { name: "AI/ML", value: 45, color: "#6366f1" },
  { name: "Web Dev", value: 35, color: "#a855f7" },
  { name: "IoT", value: 20, color: "#8b5cf6" }
];

const skills = [
  "Python", "React", "Machine Learning", "TensorFlow", "Node.js", 
  "MongoDB", "Deep Learning", "Arduino", "NLP", "Docker"
];

export function ProjectsSkillsCard() {
  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 style={{ fontWeight: 700 }}>Projects & Skills</h4>
          <p className="text-sm text-gray-500">Domain distribution</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="h-56 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={projectData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {projectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            />
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Skills Tags */}
      <div>
        <div className="text-sm text-gray-600 mb-3" style={{ fontWeight: 600 }}>Top Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 hover:border-indigo-400 transition-colors cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 text-center">
          <div className="text-2xl text-violet-600 mb-1" style={{ fontWeight: 700 }}>12</div>
          <div className="text-xs text-gray-600">Total Projects</div>
        </div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 text-center">
          <div className="text-2xl text-pink-600 mb-1" style={{ fontWeight: 700 }}>18</div>
          <div className="text-xs text-gray-600">Skills Mastered</div>
        </div>
      </div>
    </div>
  );
}
