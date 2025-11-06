import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Nodes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="10%" y1="20%" x2="80%" y2="40%" stroke="url(#gradient1)" strokeWidth="1" className="animate-glow" />
          <line x1="20%" y1="60%" x2="60%" y2="30%" stroke="url(#gradient1)" strokeWidth="1" className="animate-glow" />
          <line x1="70%" y1="70%" x2="30%" y2="80%" stroke="url(#gradient1)" strokeWidth="1" className="animate-glow" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200/50 mb-8 shadow-lg">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-sm text-indigo-600">AI-Powered Academic Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 max-w-4xl mx-auto" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1 }}>
          Your Academic Growth,
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
            Decoded by AI
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          EduWeave transforms student data into insights, predictions, and personalized learning paths. 
          Experience the future of educational intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Try Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8 py-6 border-2 border-indigo-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-indigo-100 shadow-lg">
            <div className="text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2" style={{ fontWeight: 700 }}>
              10K+
            </div>
            <div className="text-gray-600">Students Empowered</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-100 shadow-lg">
            <div className="text-4xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2" style={{ fontWeight: 700 }}>
              95%
            </div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-violet-100 shadow-lg">
            <div className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2" style={{ fontWeight: 700 }}>
              24/7
            </div>
            <div className="text-gray-600">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
