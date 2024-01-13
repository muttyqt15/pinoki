import React from "react";
import "./styles/fonts.css";
interface DefaultPopupProps {
  handleClick: () => void;
}
const DefaultPopup = ({ handleClick }: DefaultPopupProps) => {
  return (
    <>
      <h1 className="text-green-200">Hello!</h1>
    </>
  );
};

export default DefaultPopup;
