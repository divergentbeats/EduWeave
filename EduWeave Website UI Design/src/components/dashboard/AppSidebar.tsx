import { Brain, LayoutDashboard, FolderKanban, Lightbulb, MessageSquare, Route, Users, Settings, Award, X } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: FolderKanban, label: "Projects & Skills", id: "projects" },
  { icon: Lightbulb, label: "AI Insights", id: "insights" },
  { icon: Route, label: "Predictive Path", id: "path" },
  { icon: MessageSquare, label: "AI Echo", id: "echo" },
  { icon: Award, label: "Achievements", id: "achievements" },
  { icon: Users, label: "Community Hub", id: "community" },
  { icon: Settings, label: "Settings", id: "settings" }
];

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeView: string;
  onNavigate: (viewId: string) => void;
}

export function AppSidebar({ isOpen, onToggle, activeView, onNavigate }: AppSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 text-white z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static w-64 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl" style={{ fontWeight: 700 }}>EduWeave</span>
            </div>
            <button onClick={onToggle} className="lg:hidden p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (window.innerWidth < 1024) {
                    onToggle();
                  }
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "text-indigo-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span style={{ fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Quick Info */}
        <div className="p-4 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white" style={{ fontWeight: 700 }}>
                SK
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm truncate" style={{ fontWeight: 600 }}>Sarah Kumar</div>
                <div className="text-xs text-indigo-300">CSE • Sem 6</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
