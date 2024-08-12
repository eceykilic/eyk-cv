import React from "react";

function About() {
  return (
    <div className="text-white max-w-screen-2xl mx-auto flex justify-between items-center">
      <div className="flex-1">
        <p>Welcome</p>
        <h1>
          I'm Ece <br /> Yücel Kılıç
        </h1>
      </div>
      <div className="flex-1 flex justify-end">
        <img src="/resim.png" alt="Ece Yücel Kılıç" className="w-1/2 rounded-2xl shadow-xl shadow-slate-600" />
      </div>
    </div>
  );
}

export default About;
