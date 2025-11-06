import { CommunityPreview } from "../dashboard/CommunityPreview";
import { Plus, TrendingUp, Users, MessageCircle, Heart, Bookmark } from "lucide-react";
import { Button } from "../ui/button";

const trendingTopics = [
  { name: "Machine Learning", posts: 45, color: "indigo" },
  { name: "Web Development", posts: 38, color: "purple" },
  { name: "Placement Tips", posts: 32, color: "violet" },
  { name: "IoT Projects", posts: 28, color: "pink" },
  { name: "Data Science", posts: 25, color: "blue" }
];

const activeUsers = [
  { name: "Rahul K.", avatar: "RK", contributions: 24, online: true },
  { name: "Priya S.", avatar: "PS", contributions: 19, online: true },
  { name: "Alex C.", avatar: "AC", contributions: 16, online: false },
  { name: "Divya P.", avatar: "DP", contributions: 14, online: true }
];

const aiHighlights = [
  {
    title: "Top Skill This Week",
    value: "Machine Learning",
    trend: "+32%",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Most Active Domain",
    value: "AI/ML Projects",
    trend: "45 posts",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-600"
  }
];

export function CommunityHubPage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700 }}>
            Community Hub
          </h1>
          <p className="text-gray-600">Connect, share, and learn with your peers</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl">
          <Plus className="w-4 h-4 mr-2" />
          Post New Project / Idea
        </Button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-center">
          <div className="text-3xl text-indigo-600 mb-1" style={{ fontWeight: 800 }}>234</div>
          <div className="text-sm text-gray-600">Total Posts</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 text-center">
          <div className="text-3xl text-purple-600 mb-1" style={{ fontWeight: 800 }}>1.2K</div>
          <div className="text-sm text-gray-600">Members</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 text-center">
          <div className="text-3xl text-pink-600 mb-1" style={{ fontWeight: 800 }}>156</div>
          <div className="text-sm text-gray-600">Online Now</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 text-center">
          <div className="text-3xl text-violet-600 mb-1" style={{ fontWeight: 800 }}>3.4K</div>
          <div className="text-sm text-gray-600">Interactions</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Feed - Main Area */}
        <div className="lg:col-span-8 space-y-6">
          {/* AI Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${highlight.color} text-white shadow-lg relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8" />
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">AI Insight</span>
                    </div>
                    <div className="text-sm text-indigo-100 mb-2">{highlight.title}</div>
                    <div className="text-2xl mb-2" style={{ fontWeight: 800 }}>{highlight.value}</div>
                    <div className="text-sm text-indigo-100">{highlight.trend} from last week</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Community Feed */}
          <CommunityPreview />

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" className="rounded-xl border-indigo-300 hover:bg-indigo-50">
              Load More Posts
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Trending Topics */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 style={{ fontWeight: 700 }}>Trending Topics</h3>
            </div>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-${topic.color}-500 to-${topic.color}-600 flex items-center justify-center text-white text-xs`} style={{ fontWeight: 700 }}>
                      {index + 1}
                    </div>
                    <span className="text-sm group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 600 }}>
                      {topic.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{topic.posts} posts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Users */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 style={{ fontWeight: 700 }}>Active Contributors</h3>
            </div>
            <div className="space-y-4">
              {activeUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm" style={{ fontWeight: 600 }}>
                        {user.avatar}
                      </div>
                      {user.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm" style={{ fontWeight: 600 }}>{user.name}</div>
                      <div className="text-xs text-gray-500">{user.contributions} posts</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-indigo-600 hover:bg-indigo-50 rounded-lg">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 shadow-lg">
            <h3 className="mb-4" style={{ fontWeight: 700 }}>Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-indigo-50 border border-indigo-200 hover:border-indigo-400 transition-all duration-200 group">
                <MessageCircle className="w-5 h-5 text-indigo-600" />
                <span className="text-sm group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 600 }}>
                  Start Discussion
                </span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-400 transition-all duration-200 group">
                <Heart className="w-5 h-5 text-purple-600" />
                <span className="text-sm group-hover:text-purple-600 transition-colors" style={{ fontWeight: 600 }}>
                  View Liked Posts
                </span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-pink-50 border border-pink-200 hover:border-pink-400 transition-all duration-200 group">
                <Bookmark className="w-5 h-5 text-pink-600" />
                <span className="text-sm group-hover:text-pink-600 transition-colors" style={{ fontWeight: 600 }}>
                  Saved Content
                </span>
              </button>
            </div>
          </div>

          {/* Community Stats */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg">
            <h3 className="mb-4" style={{ fontWeight: 700 }}>Your Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-indigo-100 text-sm">Posts Created</span>
                <span className="text-2xl" style={{ fontWeight: 700 }}>8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-indigo-100 text-sm">Total Likes Received</span>
                <span className="text-2xl" style={{ fontWeight: 700 }}>142</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-indigo-100 text-sm">Comments Made</span>
                <span className="text-2xl" style={{ fontWeight: 700 }}>67</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-sm text-indigo-100 mb-2">Engagement Score</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full" style={{ width: "78%" }} />
                  </div>
                  <span style={{ fontWeight: 700 }}>78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
