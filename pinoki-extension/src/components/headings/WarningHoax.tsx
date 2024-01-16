import React from "react";

const WarningHoax = () => {
  return (
    <section className="h-16 flex">
      <img src="/public/SayNoToHoax.png" alt="logo" className="h-12 w-auto" />
      <div className="flex flex-col items-center">
        <h1 className="montserrat text-2xl">PINOKI</h1>
        <h2 className="text-[#fc8c74] text-xs font-thin pl-3">www.fakenews.com</h2>
      </div>
      <div className="flex pl-3 gap-2 justify-center mt-3">
        <img src="/public/WarningSign.svg" alt="logo" className="h-4 w-4" />
        <img src="/public/hourglass.svg" alt="logo" className="h-4 w-4" />
        <img src="/public/settings.svg" alt="logo" className="h-4 w-4" />
      </div>
    </section>
  );
};

export default WarningHoax;
