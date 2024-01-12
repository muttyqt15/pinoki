import React from "react";
import "./App.css";
import "./tailwind.css";
import "../components/styles/fonts.css";

function App() {

  // Handler to recieve emails from contentscript
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let text = request.text;
    if (text) {

    } else if (text == null || text.length === 0 || text === undefined) {
      console.log("No text found!")
    } else {
      console.log("We don't know what happened!")
    }
  })
  const handleClick = async () => {
    // Get current active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Execute script to scrape text
    if (tab.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: scrapeSelectedText,
      });
  
      console.log("Running script!");
    }
  };
  
  const scrapeSelectedText = () => {
    // Get selected text
    let selectedText = window.getSelection()?.toString();
    console.log("Selected text:", selectedText);
    chrome.runtime.sendMessage({ text: selectedText }) // , (response) => {}
    // TODO: Send selected text to firebase backend
  };
  return (
    <div className="flex flex-col w-full min-w-[300px] min-h-[300px] overflow-y-scroll overflow-x-hidden p-4 montserrat border rounded-xl">
      <div className="h-1/3 space-x-4 flex">
        <img
          src="/public/Pinoki.png"
          alt="Pinoki mascot!"
          className="h-[72px] w-[72px]"
        />
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-lg">Pinoki</h1>
          <p className="text-xs text-green-600">Rakyat melawan misinformasi!</p>
        </div>
      </div>
      <div className="h-1/3 flex flex-col items-center gap-y-4 mt-8 justify-center text-center">
        <p>
          Situs ini tidak mengandung keyword yang terdeteksi oleh sistem kami.
        </p>
        <p>Tidak terdeteksi tidak berarti 100% benar!</p>
      </div>
      <div className="mt-12 items-end justify-center pb-2">
        <button
          id="hoax-button"
          className="text-white text-2xl w-full bg-green-300 rounded-md h-full hover:bg-green-400 transform transtion duration-300 ease-in-out"
          onClick={handleClick}>
          Laporkan hoax!
        </button>
      </div>
    </div>
  );
}

export default App;
