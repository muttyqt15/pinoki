import React, { useState } from "react";
import "./App.css";
import "./tailwind.css";
import "../components/styles/fonts.css";
// import defaultPopup from "../components/DefaultPopup"
import SuccessHeader from "../components/headings/SuccessHeader";
import LaporkanHoaxButton from "../components/buttons/LaporkanHoax";
function App() {
  // Handler to recieve emails from contentscript
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let text = request.text;
    if (text) {
    } else if (text == null || text.length === 0 || text === undefined) {
      console.log("No text found!");
    } else {
      console.log("We don't know what happened!");
    }
  });
  const [click, setClick] = useState(false);

  const handleClick = async () => {
    setClick((prev) => !prev);
  };

  const handleLaporkanHoax = () => {
    console.log("Laporkan hoax clicked!");
    setClick((prev) => !prev);
  };

  const DefaultPopup = () => {
    return (
      <div className="w-full h-full">
        <SuccessHeader />
        <p className="text-black text-xs font-thin text-center px-3">
          Situs ini tidak mengandung keyword yang terdeteksi oleh sistem kami.
        </p>
        <p className="text-xs text-center font-light mt-3 px-3">
          Tidak terdeteksi tidak berarti 100% benar!
        </p>
        <div className="mt-12">
        <LaporkanHoaxButton handleClick={handleLaporkanHoax} />

        </div>
      </div>
    );
  };
  const hoaxInputPopup = () => {
    return (
      <>
        <div className="text-green-200">Hello world!</div>
        <button onClick={handleClick} className="text-black">
          Click me
        </button>
      </>
    );
  };
  const flaggedWebsiteOpen = true;
  return (
    <div className="flex flex-col w-[300px] h-[300px] overflow-y-hidden p-4 montserrat border rounded-xl">
      {click ? hoaxInputPopup() : DefaultPopup()}
    </div>
  );
}

export default App;
