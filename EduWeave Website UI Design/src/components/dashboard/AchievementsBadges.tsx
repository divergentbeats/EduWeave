import { Award, Zap, Target, Trophy, Star, Flame } from "lucide-react";

const badges = [
  {
    icon: Award,
    name: "Consistency Badge",
    description: "Maintained 85%+ attendance for 3 semesters",
    color: "from-amber-500 to-orange-500",
    earned: true
  },
  {
    icon: Zap,
    name: "Innovator Badge",
    description: "Completed 10+ innovative projects",
    color: "from-purple-500 to-pink-500",
    earned: true
  },
  {
    icon: Star,
    name: "AI Enthusiast",
    description: "Mastered 5+ AI/ML technologies",
    color: "from-indigo-500 to-blue-500",
    earned: true
  },
  {
    icon: Flame,
    name: "Streak Master",
    description: "7-day learning streak",
    color: "from-red-500 to-orange-500",
    earned: true
  },
  {
    icon: Target,
    name: "Goal Achiever",
    description: "Completed 5 major milestones",
    color: "from-green-500 to-emerald-500",
    earned: true
  },
  {
    icon: Trophy,
    name: "Top Performer",
    description: "CGPA above 8.5 for 2 semesters",
    color: "from-yellow-500 to-amber-500",
    earned: false
  }
];

export function AchievementsBadges() {
  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 style={{ fontWeight: 700 }}>Achievements & Badges</h4>
          <p className="text-sm text-gray-500">Your earned accomplishments</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200">
          <span className="text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{ fontWeight: 600 }}>
            5/6 Earned
          </span>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={index}
              className={`group relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                badge.earned
                  ? "bg-gradient-to-br from-white to-gray-50 border-transparent hover:shadow-lg hover:-translate-y-1"
                  : "bg-gray-50 border-gray-200 opacity-50"
              }`}
              title={badge.description}
            >
              {/* Earned Badge Glow */}
              {badge.earned && (
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
              )}

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                  badge.earned
                    ? `bg-gradient-to-br ${badge.color} shadow-lg group-hover:scale-110 transition-transform duration-300`
                    : "bg-gray-300"
                }`}>
                  <Icon className={`w-7 h-7 ${badge.earned ? "text-white" : "text-gray-500"}`} />
                </div>

                {/* Name */}
                <div className="text-center">
                  <div className="text-sm mb-1" style={{ fontWeight: 600 }}>
                    {badge.name}
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-xs text-gray-600 leading-tight">
                      {badge.description}
                    </p>
                  </div>
                </div>

                {/* Earned Indicator */}
                {badge.earned && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Overall Progress</span>
          <span className="text-indigo-600" style={{ fontWeight: 600 }}>83%</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000"
            style={{ width: "83%" }}
          />
        </div>
      </div>
    </div>
  );
}
