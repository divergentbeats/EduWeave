import { Search, Bell, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface TopBarProps {
  onMenuToggle: () => void;
  currentView: string;
}

const viewLabels: Record<string, string> = {
  dashboard: "Dashboard",
  projects: "Projects & Skills",
  insights: "AI Insights",
  path: "Predictive Path",
  echo: "AI Echo",
  achievements: "Achievements",
  community: "Community Hub",
  settings: "Settings"
};

export function TopBar({ onMenuToggle, currentView }: TopBarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 px-6 py-4">
      <div className="flex items-center gap-4 mb-3">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects or insights..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm" style={{ fontWeight: 700 }}>
                SK
              </div>
              <div className="hidden md:block text-left">
                <div className="text-sm" style={{ fontWeight: 600 }}>Sarah Kumar</div>
                <div className="text-xs text-gray-500">Student</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-gray-200 shadow-xl overflow-hidden">
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                  Profile
                </button>
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                  Settings
                </button>
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-t border-gray-200 text-red-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="hover:text-indigo-600 cursor-pointer transition-colors">Dashboard</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900" style={{ fontWeight: 600 }}>{viewLabels[currentView]}</span>
      </div>
    </div>
  );
}
