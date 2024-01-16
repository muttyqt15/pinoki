import React from "react";

const SuccessHeader = () => {
  return (
    <section className="h-24 flex">
      <img src="/public/Pinoki_nohands.png" alt="logo" className="h-12 w-16" />
      <div className="flex flex-col items-center">
        <h1 className="montserrat text-2xl">PINOKI</h1>
        <h2 className="text-green-400 text-xs font-thin pl-3">www.detik.com</h2>
      </div>
      <div className="flex pl-3 gap-2 justify-center mt-3">
        <img src="/public/Checkmark.svg" alt="logo" className="h-4 w-4" />
        <img src="/public/hourglass.svg" alt="logo" className="h-4 w-4" />
        <img src="/public/settings.svg" alt="logo" className="h-4 w-4" />
      </div>
    </section>
  );
};

export default SuccessHeader;
