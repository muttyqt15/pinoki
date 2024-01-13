import React from "react";
import { createRoot } from "react-dom/client";
import "../tailwind.css";
import "../../components/styles/fonts.css";
const Options = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center p-4 montserrat">
      <div className="flex mt-8 gap-4">
        <img
          src="/public/Pinoki.png"
          alt="Pinoki mascot!"
          className="h-[96px] w-[96px] items-start"
        />
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-lg">Pinoki</h1>
          <p className="text-sm text-green-600">Rakyat melawan misinformasi!</p>
        </div>
      </div>
      <div className="poppins text-white mx-20 p-4 mt-6 border rounded-xl bg-green-400 h-96 w-full max-w-2xl md:px-8">
        <h1 className="text-center text-2xl font-bold ">FAQ</h1>
        <div className="mt-4">
          <h2 className="text-lg poppins font-bold">Apa itu Pinoki?</h2>
          <p className="mt-2 ml-4">
            Pinoki adalah ekstensi browser yang membantu pengguna untuk
            mendeteksi berita hoax.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg poppins font-bold">Apa itu Pinoki?</h2>
          <p className="mt-2 ml-4">
            Pinoki adalah ekstensi browser yang membantu pengguna untuk
            mendeteksi berita hoax.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg poppins font-bold">Apa itu Pinoki?</h2>
          <p className="mt-2 ml-4">
            Pinoki adalah ekstensi browser yang membantu pengguna untuk
            mendeteksi berita hoax.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg poppins font-bold">Apa itu Pinoki?</h2>
          <p className="mt-2 ml-4">
            Pinoki adalah ekstensi browser yang membantu pengguna untuk
            mendeteksi berita hoax.
          </p>
        </div>
      </div>
    </div>
  );
};

const page = document.createElement("div");
page.className = "faq_page";
document.body.appendChild(page);
const faq_page = createRoot(page);
faq_page.render(<Options />);
