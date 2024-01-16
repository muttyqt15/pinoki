import React from "react";

const LaporkanHoaxButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      className="text-white border bg-[#35D78E] flex items-center justify-center text-2xl rounded-lg gap-3 w-full py-3"
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
