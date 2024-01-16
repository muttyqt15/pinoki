import "../tailwind.css"
import "./styles/fonts.css";
import React from "react";


const InnerSquare = () => {
    return (
            <div className="w-[230px] bg-[#fc8c74] border rounded-lg flex flex-col items-start pb-3 pt-3 space-y-3">
                <div className="flex items-center space-x-3 ml-2">
                    <img className="h-4 w-4" src="/public/Wrong.svg" alt="wrong information"></img>
                    <p className="text-[9px] w-[170px]">Apel adalah sebuah hewan berkaki 4</p>
                </div>
                <div className="flex items-center space-x-3 ml-2">
                    <img className="h-4 w-4" src="/public/WhiteCheckmark.svg" alt="White checkmark"></img>
                    <p className="text-[9px] w-[170px]">Apel adalah buah berwarna merah yang sering dikonsumsi. 4</p>
                </div>
            </div>
      
    )
  }
  
  export default InnerSquare