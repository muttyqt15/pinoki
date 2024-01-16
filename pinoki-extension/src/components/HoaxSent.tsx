import React from "react";
import LaporkanHoaxHeader from "./headings/LaporkanHoaxHeader";
import { usePageContext } from "../context/PageContext";

const HoaxSent = () => {
  const { updateCurrentPage } = usePageContext();
  const goBack = () => {
    updateCurrentPage("default");
  };
  return (
    <div className="w-full h-full">
      <LaporkanHoaxHeader handleGoback={goBack} />
      <div className="px-4 flex flex-col items-center justify-center mt-8">
        <p className="text-center flex items-center justify-center">
          Laporan sudah dikirim dan akan
        </p>
        diproses oleh sistem kami.
        <p className="mt-2 text-center">
          Terima kasih sudah membantu dalam mengurangi misinformasi!
        </p>
        <img src="/public/SuccessBag.svg" alt="successful hoax report!" className="mt-4" />
      </div>
    </div>
  );
};

export default HoaxSent;
