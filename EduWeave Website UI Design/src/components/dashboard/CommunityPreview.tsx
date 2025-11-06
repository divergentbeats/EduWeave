import { Users, MessageCircle, Heart, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const communityPosts = [
  {
    id: 1,
    author: "Rahul Krishnan",
    avatar: "RK",
    title: "Built an AI-powered Resume Analyzer",
    tags: ["Machine Learning", "NLP", "Python"],
    likes: 24,
    comments: 8,
    time: "2h ago",
    thumbnail: "bg-gradient-to-br from-blue-400 to-indigo-500"
  },
  {
    id: 2,
    author: "Priya Sharma",
    avatar: "PS",
    title: "Placement Success Story - Got into Google!",
    tags: ["Placements", "Interview Tips"],
    likes: 45,
    comments: 12,
    time: "5h ago",
    thumbnail: "bg-gradient-to-br from-purple-400 to-pink-500"
  },
  {
    id: 3,
    author: "Alex Chen",
    avatar: "AC",
    title: "Full Stack E-Commerce Project Demo",
    tags: ["Web Dev", "MERN Stack", "React"],
    likes: 18,
    comments: 5,
    time: "1d ago",
    thumbnail: "bg-gradient-to-br from-green-400 to-emerald-500"
  },
  {
    id: 4,
    author: "Divya Patel",
    avatar: "DP",
    title: "IoT Smart Campus - My Final Year Project",
    tags: ["IoT", "Arduino", "Innovation"],
    likes: 32,
    comments: 10,
    time: "1d ago",
    thumbnail: "bg-gradient-to-br from-orange-400 to-red-500"
  }
];

export function CommunityPreview() {
  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 style={{ fontWeight: 700 }}>Community Hub</h4>
            <p className="text-sm text-gray-500">Recent projects & discussions</p>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-green-100 border border-green-300">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-700" style={{ fontWeight: 600 }}>156 Online</span>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
        {communityPosts.map((post) => (
          <div
            key={post.id}
            className="group p-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 cursor-pointer bg-gradient-to-br from-white to-gray-50"
          >
            <div className="flex gap-3">
              {/* Thumbnail */}
              <div className={`w-16 h-16 rounded-lg ${post.thumbnail} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                <div className="text-xs text-center" style={{ fontWeight: 600 }}>
                  Project
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Author */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs" style={{ fontWeight: 600 }}>
                    {post.avatar}
                  </div>
                  <span className="text-xs text-gray-600">{post.author}</span>
                  <span className="text-xs text-gray-400">• {post.time}</span>
                </div>

                {/* Title */}
                <h5 className="mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1" style={{ fontWeight: 600 }}>
                  {post.title}
                </h5>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1 hover:text-pink-600 transition-colors cursor-pointer">
                    <Heart className="w-3.5 h-3.5" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl group">
        Go to Community Hub
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>

      {/* Quick Stats */}
      <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xl text-pink-600 mb-1" style={{ fontWeight: 700 }}>234</div>
          <div className="text-xs text-gray-600">Total Posts</div>
        </div>
        <div>
          <div className="text-xl text-purple-600 mb-1" style={{ fontWeight: 700 }}>1.2K</div>
          <div className="text-xs text-gray-600">Members</div>
        </div>
        <div>
          <div className="text-xl text-indigo-600 mb-1" style={{ fontWeight: 700 }}>156</div>
          <div className="text-xs text-gray-600">Online Now</div>
        </div>
      </div>
    </div>
  );
}
