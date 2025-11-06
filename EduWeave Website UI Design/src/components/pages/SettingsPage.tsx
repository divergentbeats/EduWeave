import { User, Bell, Lock, Palette, Globe, Shield, Mail, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { useState } from "react";

export function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700 }}>
          Settings
        </h1>
        <p className="text-gray-600">Manage your account preferences and configurations</p>
      </div>

      {/* Profile Settings */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Profile Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>Full Name</label>
            <input
              type="text"
              defaultValue="Sarah Kumar"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>Email Address</label>
            <input
              type="email"
              defaultValue="sarah.kumar@university.edu"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>Branch</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
              <option>Computer Science Engineering</option>
              <option>Information Technology</option>
              <option>Electronics & Communication</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>Semester</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
              <option>6th Semester</option>
              <option>7th Semester</option>
              <option>8th Semester</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>Phone Number</label>
            <input
              type="tel"
              defaultValue="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>Roll Number</label>
            <input
              type="text"
              defaultValue="CSE2021042"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl">
            Save Profile Changes
          </Button>
        </div>
      </div>

      {/* Notifications Settings */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Notifications</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-indigo-600 mt-1" />
              <div>
                <h3 className="mb-1" style={{ fontWeight: 600 }}>Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive email updates about your academic progress</p>
              </div>
            </div>
            <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h3 className="mb-1" style={{ fontWeight: 600 }}>Push Notifications</h3>
                <p className="text-sm text-gray-600">Get instant updates on new insights and achievements</p>
              </div>
            </div>
            <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-pink-600 mt-1" />
              <div>
                <h3 className="mb-1" style={{ fontWeight: 600 }}>Weekly Progress Report</h3>
                <p className="text-sm text-gray-600">Receive a weekly summary of your achievements</p>
              </div>
            </div>
            <Switch checked={weeklyReport} onCheckedChange={setWeeklyReport} />
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Appearance</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
            <div className="flex items-start gap-3">
              <Palette className="w-5 h-5 text-violet-600 mt-1" />
              <div>
                <h3 className="mb-1" style={{ fontWeight: 600 }}>Dark Mode</h3>
                <p className="text-sm text-gray-600">Switch to a darker color scheme</p>
              </div>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>

          <div>
            <label className="block text-sm mb-3" style={{ fontWeight: 600 }}>Theme Color</label>
            <div className="grid grid-cols-6 gap-3">
              {[
                { name: "Indigo", color: "bg-indigo-600" },
                { name: "Purple", color: "bg-purple-600" },
                { name: "Pink", color: "bg-pink-600" },
                { name: "Blue", color: "bg-blue-600" },
                { name: "Green", color: "bg-green-600" },
                { name: "Orange", color: "bg-orange-600" }
              ].map((theme, index) => (
                <button
                  key={index}
                  className={`w-full aspect-square rounded-xl ${theme.color} hover:scale-110 transition-transform border-2 ${
                    index === 0 ? "border-gray-900" : "border-transparent"
                  }`}
                  title={theme.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Privacy & Security</h2>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-sm group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 600 }}>
                Change Password
              </span>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 600 }}>
                Two-Factor Authentication
              </span>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="text-sm group-hover:text-indigo-600 transition-colors" style={{ fontWeight: 600 }}>
                Privacy Settings
              </span>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Skills Management */}
      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Manage Skills</h2>
          </div>
          <Button variant="outline" className="rounded-xl border-pink-300 hover:bg-pink-50">
            Add New Skill
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          {["Python", "React", "Machine Learning", "TensorFlow", "Node.js", "MongoDB", "Deep Learning", "Arduino", "NLP", "Docker", "Git", "TypeScript"].map((skill, index) => (
            <div
              key={index}
              className="group px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 hover:border-indigo-400 transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="text-sm" style={{ fontWeight: 600 }}>{skill}</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 shadow-lg">
        <h2 className="mb-4 text-red-700" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Danger Zone</h2>
        <div className="space-y-3">
          <button className="w-full p-4 rounded-xl bg-white border border-red-300 hover:bg-red-50 hover:border-red-400 text-red-700 transition-all duration-200 text-sm" style={{ fontWeight: 600 }}>
            Export All Data
          </button>
          <button className="w-full p-4 rounded-xl bg-white border border-red-300 hover:bg-red-50 hover:border-red-400 text-red-700 transition-all duration-200 text-sm" style={{ fontWeight: 600 }}>
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
}
