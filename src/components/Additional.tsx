import React from 'react';

export default function Additional() {
  return (
    <section className="py-16 bg-white" id="additional">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Additional Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["English", "Telugu", "Hindi"].map((lang, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Technical Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "Data Analytics",
                "Data Science"
              ].map((interest, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}