import { Send, Bot, User } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm AI Echo. I can help you with information about your projects, workshops, placements, and more. What would you like to know?",
    sender: "ai",
    timestamp: "10:30 AM"
  }
];

export function AIChatPanel() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("project")) {
      return "You have completed 12 projects so far! Your recent projects include an NLP Sentiment Analyzer, Smart Campus IoT System, and E-Commerce Platform. Would you like details on any specific project?";
    } else if (lowerQuery.includes("attendance")) {
      return "Your current attendance is 92%. DBMS is at 78% - you might want to focus on that. All other subjects are above 85%.";
    } else if (lowerQuery.includes("placement") || lowerQuery.includes("job")) {
      return "Based on your profile, I recommend applying to ML Engineer and Full Stack Developer roles. Companies like Microsoft, Google, and Amazon are hiring for similar profiles. Want me to suggest specific job postings?";
    } else if (lowerQuery.includes("workshop")) {
      return "There's a Deep Learning workshop by Prof. Sharma next week and a React Masterclass in 2 weeks. Both align well with your interests!";
    } else {
      return "I can help you with information about your academic progress, projects, attendance, workshops, placements, and career guidance. What specific information are you looking for?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h4 style={{ fontWeight: 700 }}>AI Echo</h4>
            <p className="text-xs text-indigo-100">Your Academic Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.sender === "ai"
                ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                : "bg-gradient-to-br from-gray-400 to-gray-500"
            }`}>
              {message.sender === "ai" ? (
                <Bot className="w-5 h-5 text-white" />
              ) : (
                <User className="w-5 h-5 text-white" />
              )}
            </div>

            {/* Message Bubble */}
            <div className={`flex flex-col max-w-[80%] ${message.sender === "user" ? "items-end" : ""}`}>
              <div
                className={`px-4 py-3 rounded-2xl ${
                  message.sender === "ai"
                    ? "bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-tl-none"
                    : "bg-gradient-to-br from-gray-100 to-gray-200 rounded-tr-none"
                }`}
              >
                <p className="text-sm leading-relaxed text-gray-800">{message.text}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 px-2">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about previous projects, workshops, or placements..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="px-4 pb-4 bg-white">
        <div className="flex gap-2 flex-wrap">
          {["Show my projects", "Attendance status", "Upcoming workshops"].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInputText(suggestion)}
              className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs hover:bg-indigo-100 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
