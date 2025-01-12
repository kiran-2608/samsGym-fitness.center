import React from "react";



export const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">Introduction</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {/* {stackItems.map((item) => (
            <div
             
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              
             
            </div>
             
          ))} */}
          <p className="text-gray-400 font-semibold">
             With over 12 years of dedicated experience in the fitness
             industry, I have established myself as a seasoned professional
             passionate about transforming lives through fitness and strength
             training. I have successfully organized and managed five major
             fitness events, including prestigious titles such as Mr.
             Hyderabad Classic, Mr. Telangana Classic, and Strength and
             Powerlifting Mr. Telangana. Having trained over 5,000
             individuals, I bring a wealth of expertise in building tailored
             fitness programs, mentoring athletes, and helping clients
             achieve their peak physical potential. My experience spans
             advanced bodybuilding techniques, powerlifting methodologies,
             and performance optimization. Driven by a commitment to
             excellence, I aim to inspire others to embrace discipline,
             overcome challenges, and unlock their true potential.
           </p>
        </div>
      </div>
    </section>
  );
};
