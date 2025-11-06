import { Compass, ArrowRight } from "lucide-react";

const recommendedElectives = [
  { name: "Natural Language Processing", match: 95 },
  { name: "Advanced Deep Learning", match: 92 },
  { name: "Cloud Computing & DevOps", match: 88 }
];

export function PredictivePathCard() {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
      {/* Animated Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 group-hover:from-white/10 group-hover:to-white/20 transition-all duration-500"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
            <Compass className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-sm text-indigo-100 mb-1">Predicted Career Path</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              🧭 Machine Learning Engineer
            </h3>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-indigo-100">Match Confidence</span>
            <span style={{ fontWeight: 700 }}>93%</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-white to-indigo-200 rounded-full transition-all duration-1000"
              style={{ width: '93%' }}
            ></div>
          </div>
        </div>

        {/* Recommended Electives */}
        <div>
          <h4 className="mb-4 text-indigo-100" style={{ fontWeight: 600 }}>
            📚 Recommended Electives
          </h4>
          <div className="space-y-3">
            {recommendedElectives.map((elective, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer group/item"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontWeight: 600 }}>{elective.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full"
                          style={{ width: `${elective.match}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-indigo-100 min-w-[3rem] text-right">
                        {elective.match}% match
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-6 w-full px-6 py-3 rounded-xl bg-white text-purple-600 hover:bg-indigo-50 transition-all duration-200 hover:scale-105 shadow-lg" style={{ fontWeight: 600 }}>
          Explore Full Career Path
        </button>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-indigo-100 mb-1">Salary Range</div>
            <div style={{ fontWeight: 700 }}>$80K - $150K</div>
          </div>
          <div>
            <div className="text-indigo-100 mb-1">Job Openings</div>
            <div style={{ fontWeight: 700 }}>12,500+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
