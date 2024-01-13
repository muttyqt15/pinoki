import React from "react";
import "./App.css";
import "./tailwind.css";
import "../components/styles/fonts.css";
import defaultPopup from "../components/DefaultPopup"
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
    chrome.runtime.sendMessage({ text: selectedText }); // , (response) => {}
    // TODO: Send selected text to firebase backend
  };
  
  
  const hoaxInputPopup = () => {
    return (
      <>
      <div className="text-green-200">Hello world!</div>
      </>
    )
  };
  const flaggedWebsiteOpen = true;
  return (
    <div className="flex flex-col w-[300px] h-[300px] overflow-y-hidden p-4 montserrat border rounded-xl">
      {flaggedWebsiteOpen ? hoaxInputPopup() : defaultPopup({handleClick})}
    </div>
  );
}

export default App;
