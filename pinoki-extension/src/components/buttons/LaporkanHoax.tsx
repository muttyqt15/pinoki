import React from "react";

const LaporkanHoaxButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      className="text-white border bg-[#35D78E] flex items-center justify-center text-2xl rounded-lg gap-3 w-full py-1 px-2 transition transform duration-300 ease-in-out hover:bg-green-400"
      onClick={handleClick}>
      Laporkan hoax
      <span>
        <img
          src="/public/Loudspeaker.svg"
          alt="Loud speaker"
          className="w-6 h-6"
        />
      </span>
    </button>
  );
};

export default LaporkanHoaxButton;
