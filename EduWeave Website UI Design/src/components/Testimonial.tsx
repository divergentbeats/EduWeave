import { Quote, Star } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Testimonial Card */}
        <div className="relative">
          {/* Quote Icon Background */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl rotate-6">
            <Quote className="w-10 h-10 text-white" />
          </div>

          {/* Card */}
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="mb-8">
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed" style={{ fontWeight: 500 }}>
                "EduWeave feels like having a{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  personal academic mentor
                </span>{" "}
                powered by AI. It's transformed how I approach my studies and plan my career."
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl" style={{ fontWeight: 700 }}>
                RK
              </div>
              <div>
                <div className="text-lg" style={{ fontWeight: 700 }}>Rahul Krishnan</div>
                <div className="text-gray-600">Computer Science Student, MIT</div>
              </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-100 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              text: "The AI insights helped me identify my weak areas and improve my CGPA significantly.",
              author: "Ananya Patel",
              role: "Engineering Student",
              initial: "AP"
            },
            {
              text: "AI Echo is like having 24/7 access to all campus information. Incredibly helpful!",
              author: "Michael Lee",
              role: "Business Student",
              initial: "ML"
            },
            {
              text: "The career path predictions gave me clarity on what electives to choose for my goals.",
              author: "Divya Singh",
              role: "Data Science Student",
              initial: "DS"
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm" style={{ fontWeight: 700 }}>
                  {testimonial.initial}
                </div>
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>{testimonial.author}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
