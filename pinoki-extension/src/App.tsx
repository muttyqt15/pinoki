import "./App.css";
import "./tailwind.css";
import "./components/styles/fonts.css";
// import defaultPopup from "../components/DefaultPopup"
import SuccessHeader from "./components/headings/SuccessHeader";
import LaporkanHoaxButton from "./components/buttons/LaporkanHoax";
import HoaxForm from "./components/HoaxForm";
import { usePageContext } from "./context/PageContext";
import HoaxSent from "./components/HoaxSent";
import PinokiInsightPopup from "./components/PinokiInsightPopup";
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

  // const handleClick = async () => {
  //   setClick((prev) => !prev);
  // };

  const { currentPage, updateCurrentPage } = usePageContext();
  const handleLaporkanHoax = () => {
    updateCurrentPage("hoaxform");
  };
  const goToHoaxFound = () => {
    updateCurrentPage("hoaxFound");
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
        <button onClick={goToHoaxFound}>test</button>
        <div className="mt-12">
          <LaporkanHoaxButton handleClick={handleLaporkanHoax} />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-[300px] min-h-[300px] overflow-y-hidden p-4 montserrat border rounded-xl">
      {currentPage === "default" && DefaultPopup()}
      {currentPage === "hoaxform" && <HoaxForm />}
      {currentPage === "hoaxSent" && <HoaxSent />}
      {currentPage === "hoaxFound" && <PinokiInsightPopup />}
    </div>
  );
}

export default App;
