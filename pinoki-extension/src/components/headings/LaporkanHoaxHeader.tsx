import React from "react";

const LaporkanHoaxHeader = ({ handleGoback }: {handleGoback: () => void}) => {
  return (
    <section className="h-12 flex">
      <img src="/public/Pinoki_nohands.png" alt="logo" className="h-12 w-16" />
      <div className="flex flex-col items-center w-96">
        <h1 className="montserrat text-2xl">PINOKI</h1>
        <h2 className="text-green-400 text-xs font-thin pl-3 w-full">
          Laporkan Hoax
        </h2>
      </div>
      <button className="flex pl-3 gap-2 justify-end mt-2 w-full h-8" onClick={handleGoback}>
        <img
          src="/public/arrow-right-circle.png"
          alt="logo"
          className="h-8 w-8 hover:animate-pulse"
        />
      </button>
    </section>
  );
};

export default LaporkanHoaxHeader;
