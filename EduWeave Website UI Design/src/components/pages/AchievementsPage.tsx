import { AchievementsBadges } from "../dashboard/AchievementsBadges";
import { Trophy, Target, TrendingUp, Award, Star, Zap } from "lucide-react";

const milestones = [
  {
    title: "Academic Excellence",
    description: "Maintained CGPA above 8.5 for 2 consecutive semesters",
    date: "Achieved in Sem 6",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500",
    points: 500
  },
  {
    title: "Project Master",
    description: "Completed 10+ technical projects across multiple domains",
    date: "Achieved 2 months ago",
    icon: Target,
    color: "from-indigo-500 to-blue-500",
    points: 750
  },
  {
    title: "Skill Champion",
    description: "Mastered 15+ technical skills with proficiency above 80%",
    date: "Achieved 1 month ago",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    points: 600
  },
  {
    title: "Attendance Pro",
    description: "Maintained 85%+ attendance for entire semester",
    date: "Achieved in Sem 5",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    points: 400
  }
];

const progressTracking = [
  {
    category: "Academic Performance",
    current: 87,
    target: 90,
    unit: "%",
    color: "indigo"
  },
  {
    category: "Project Completion",
    current: 12,
    target: 15,
    unit: "projects",
    color: "purple"
  },
  {
    category: "Skill Mastery",
    current: 18,
    target: 25,
    unit: "skills",
    color: "violet"
  },
  {
    category: "Community Engagement",
    current: 24,
    target: 50,
    unit: "contributions",
    color: "pink"
  }
];

const leaderboard = [
  { rank: 1, name: "Rahul Krishnan", points: 2850, avatar: "RK", trend: "up" },
  { rank: 2, name: "Priya Sharma", points: 2720, avatar: "PS", trend: "up" },
  { rank: 3, name: "Sarah Kumar", points: 2650, avatar: "SK", trend: "same", isCurrentUser: true },
  { rank: 4, name: "Alex Chen", points: 2580, avatar: "AC", trend: "down" },
  { rank: 5, name: "Divya Patel", points: 2510, avatar: "DP", trend: "up" }
];

export function AchievementsPage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700 }}>
            Achievements & Progress
          </h1>
          <p className="text-gray-600">Track your accomplishments and learning milestones</p>
        </div>
        <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
          <div className="text-sm text-indigo-100 mb-1">Total Points</div>
          <div className="text-3xl" style={{ fontWeight: 800 }}>2,650</div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-yellow-600" />
          </div>
          <div className="text-3xl text-yellow-600 mb-1" style={{ fontWeight: 800 }}>5</div>
          <div className="text-sm text-gray-600">Badges Earned</div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-3xl text-indigo-600 mb-1" style={{ fontWeight: 800 }}>4</div>
          <div className="text-sm text-gray-600">Milestones Reached</div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-3xl text-purple-600 mb-1" style={{ fontWeight: 800 }}>3rd</div>
          <div className="text-sm text-gray-600">Class Rank</div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-pink-600" />
          </div>
          <div className="text-3xl text-pink-600 mb-1" style={{ fontWeight: 800 }}>83%</div>
          <div className="text-sm text-gray-600">Progress Rate</div>
        </div>
      </div>

      {/* Badges Section */}
      <AchievementsBadges />

      {/* Milestones */}
      <div>
        <h2 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Recent Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 700 }}>
                        {milestone.title}
                      </h3>
                      <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs border border-indigo-200" style={{ fontWeight: 600 }}>
                        +{milestone.points} pts
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{milestone.description}</p>
                    <div className="text-xs text-gray-500">{milestone.date}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Tracking */}
      <div>
        <h2 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Learning Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {progressTracking.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 style={{ fontWeight: 700 }}>{item.category}</h3>
                <span className="text-sm text-gray-500">
                  {item.current} / {item.target} {item.unit}
                </span>
              </div>
              <div className="mb-3">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full transition-all duration-1000`}
                    style={{ width: `${(item.current / item.target) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {Math.round((item.current / item.target) * 100)}% Complete
                </span>
                <span className={`text-${item.color}-600`} style={{ fontWeight: 600 }}>
                  {item.target - item.current} {item.unit} to go
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-indigo-200 shadow-lg">
        <h2 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Class Leaderboard</h2>
        <div className="space-y-3">
          {leaderboard.map((student, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                student.isCurrentUser
                  ? "bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-400 shadow-md"
                  : "bg-white border-gray-200 hover:border-indigo-300"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  student.rank === 1
                    ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white"
                    : student.rank === 2
                    ? "bg-gradient-to-br from-gray-300 to-gray-400 text-white"
                    : student.rank === 3
                    ? "bg-gradient-to-br from-orange-300 to-orange-400 text-white"
                    : "bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600"
                }`} style={{ fontWeight: 800, fontSize: '1.25rem' }}>
                  {student.rank}
                </div>

                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                  student.isCurrentUser
                    ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                    : "bg-gradient-to-br from-gray-400 to-gray-500"
                }`} style={{ fontWeight: 600 }}>
                  {student.avatar}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span style={{ fontWeight: 700 }}>{student.name}</span>
                    {student.isCurrentUser && (
                      <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white text-xs" style={{ fontWeight: 600 }}>
                        You
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{student.points.toLocaleString()} points</div>
                </div>

                {/* Trend */}
                <div className={`px-3 py-1 rounded-full text-xs ${
                  student.trend === "up"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : student.trend === "down"
                    ? "bg-red-100 text-red-700 border border-red-300"
                    : "bg-gray-100 text-gray-700 border border-gray-300"
                }`}>
                  {student.trend === "up" ? "↑" : student.trend === "down" ? "↓" : "−"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
