import { MessageCircle, Hash, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Button } from "./ui/button";

const discussions = [
  {
    title: "Looking for ML project teammates",
    author: "Sarah Chen",
    replies: 12,
    tags: ["Machine Learning", "Collaboration"],
    time: "2h ago"
  },
  {
    title: "How to improve CGPA in final semester?",
    author: "Alex Kumar",
    replies: 8,
    tags: ["Academic Tips", "Study"],
    time: "5h ago"
  },
  {
    title: "Internship opportunities discussion",
    author: "Priya Sharma",
    replies: 24,
    tags: ["Career", "Internships"],
    time: "1d ago"
  }
];

const topics = [
  { icon: Hash, name: "Projects", count: 156 },
  { icon: Award, name: "Achievements", count: 89 },
  { icon: TrendingUp, name: "Career Advice", count: 234 },
  { icon: Users, name: "Study Groups", count: 45 }
];

export function CommunityHub() {
  return (
    <section id="community" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 mb-4">
            💬 Community
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Collaborate, Share Ideas,
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> and Grow Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a vibrant community of learners, share your experiences, and connect with peers and mentors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Discussion Area */}
          <div className="lg:col-span-2 space-y-4">
            {/* Active Discussions Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Active Discussions</h3>
              <Button variant="outline" className="rounded-full border-purple-300 hover:border-purple-500 hover:bg-purple-50">
                New Discussion
              </Button>
            </div>

            {/* Discussion Cards */}
            {discussions.map((discussion, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white" style={{ fontWeight: 600 }}>
                    {discussion.author.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div className="flex-1">
                    {/* Discussion Title */}
                    <h4 className="mb-2 group-hover:text-purple-600 transition-colors" style={{ fontWeight: 600 }}>
                      {discussion.title}
                    </h4>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.time}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Like Button */}
                  <button className="p-2 rounded-full hover:bg-pink-50 transition-colors group/like">
                    <Heart className="w-5 h-5 text-gray-400 group-hover/like:text-pink-500 transition-colors" />
                  </button>
                </div>
              </div>
            ))}

            {/* Load More */}
            <div className="text-center pt-4">
              <button className="px-6 py-3 rounded-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 transition-all duration-300">
                Load More Discussions
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Topics */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
              <h4 className="mb-4" style={{ fontWeight: 700 }}>Popular Topics</h4>
              <div className="space-y-3">
                {topics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/70 hover:bg-white transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="group-hover:text-purple-600 transition-colors" style={{ fontWeight: 600 }}>
                          {topic.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">{topic.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Community Stats */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <h4 className="mb-4" style={{ fontWeight: 700 }}>Community Stats</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Active Members</span>
                    <span className="text-indigo-600" style={{ fontWeight: 600 }}>2,458</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Discussions This Week</span>
                    <span className="text-purple-600" style={{ fontWeight: 600 }}>156</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-violet-600 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Mentorship Connections</span>
                    <span className="text-violet-600" style={{ fontWeight: 600 }}>89</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-pink-600 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h4 className="mb-3" style={{ fontWeight: 700 }}>Join the EduWeave Network</h4>
              <p className="text-purple-100 mb-4 text-sm">
                Connect with thousands of students and mentors
              </p>
              <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
