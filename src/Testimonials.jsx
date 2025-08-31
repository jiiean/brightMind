import React from "react";

const testimonials = [
  { quote: "I was hesitant at first, but once I experienced life without sleep, I realized what I had been missing: TIME. I’ll never go back.", author: "Javier, Engineer" },
  { quote: "The implant is seamless. I feel energized, clear, and limitless. Everyone in my office is getting one.", author: "Claire, Consultant" },
  { quote: "The nights feel endless. At first it was thrilling, but now I miss the rhythm of rest and dreams.", author: "Daniel, Artist" },
  { quote: "I can work, study, and socialize nonstop — but sometimes I wonder: if I never rest, where do I find stillness?", author: "Sofia, Student" },
  { quote: "It’s true, I gained more hours. But watching my friends sleep while I keep moving… it makes me question whether rest is more than wasted time.", author: "Omar, Teacher" },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="text-lg italic mb-4">“{t.quote}”</p>
              <p className="text-gray-700 font-semibold">— {t.author}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            See More Reviews ⭐
          </button>
        </div>
      </div>
    </section>
  );
}
