import React from "react";
import "./tailwind.css";
import "../components/styles/fonts.css";

function App() {
  const handleClick = () => {
    console.log("Working!");
  };
  return (
    <div className="flex flex-col w-full min-w-[300px] min-h-[300px] overflow-y-scroll overflow-x-hidden p-4 montserrat">
      <div className="h-1/3 space-x-2 flex">
        <img
          src="/public/Pinoki.png"
          alt="Pinoki mascot!"
          className="h-[72px] w-[72px]"
        />
        <div>
          <h1 className="text-xl">Pinoki</h1>
          <p className="text-xs text-green-600">
            Rakyat melawan misinformasi!
          </p>
        </div>
      </div>
      <div className="h-1/3 flex flex-col items-center gap-y-4 mt-8 justify-center text-center">
        <p>
          Situs ini tidak mengandung keyword yang terdeteksi oleh sistem kami.
        </p>
        <p>Tidak terdeteksi tidak berarti 100% benar!</p>
      </div>
      <div className="h-max items-end justify-center pb-2">
        <button className="text-white text-2xl w-full bg-green-300 rounded-md h-full">Laporkan hoax!</button>
      </div>
    </div>
  );
}

export default App;
