import React from 'react'
import "../tailwind.css"
import "./styles/fonts.css";
import WarningHoax from "../components/headings/WarningHoax";
import LaporkanHoaxButton from '../components/buttons/LaporkanHoax';
import InnerSquare from './InnerSquare';



const PinokiInsightPopup = () => {
  return (
        <div className="w-full h-full">
            <WarningHoax />
            <p className="text-black text-[10px] font-thin text-center px-3">
                    Hati hati! Situs ini mengandung keyword
                    yang telah dilaporkan hoax oleh pengguna kami
            </p>
            <div className="flex justify-center items-center w-full mt-3 mb-3">
                <div className="w-[250px] h-[150px] bg-[#fcece3] flex flex-col w-full border rounded-lg space-y-3 overflow-y-scroll overflow-x-hidden p-3 mb-3 shadow-inner">
                    <InnerSquare />
                    <InnerSquare />
                    <InnerSquare />
                </div>
            </div>
      </div>
  )
}

export default PinokiInsightPopup