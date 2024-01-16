import React, { ChangeEvent } from "react";
import { FormItemProps, OutputProps } from "../types";
import "../styles/fonts.css";
import "../styles/styles.css";
function FormItem(p: FormItemProps & OutputProps & { className?: string }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onChange(p.property, e.target.value);
  };
  return (
    <>
      <label htmlFor={p.property} className="signika">
        {p.name}
        {p.required && <span className="text-red-500 text-xs"> *</span>}
      </label>
      <input
        type={p.type}
        name={p.name}
        placeholder={p.placeholder}
        id={p.property}
        value={p.value as string}
        checked={p.value as boolean} // Checks if form field is filled out
        required={p.required}
        onChange={handleChange}
        autoComplete="off"
        className="border-2 border-gray-300 focus:border-blue-500 px-2 py-1 rounded-xl animate-ease"
      />
    </>
  );
}

export default FormItem;
