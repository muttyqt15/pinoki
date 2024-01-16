import React from "react";
import "./styles/fonts.css";
interface DefaultPopupProps {
  handleClick: () => void;
}
const DefaultPopup = ({ handleClick }: DefaultPopupProps) => {
  return (
    <>
      <section className="h-24 flex">
        <img src="/public/Pinoki_nohands.png" alt="logo" className="h-8 w-8"/>
      </section>
    </>
  );
};

export default DefaultPopup;
