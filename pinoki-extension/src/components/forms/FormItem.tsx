import React, { ChangeEvent } from "react";
import { FormItemProps, OutputProps } from "../types";
import "../styles/fonts.css";
import "../../tailwind.css"
function FormItem(p: FormItemProps & OutputProps & { className?: string }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onChange(p.property, e.target.value);
  };
  return (
    <>
      <label htmlFor={p.property} className="">
        {p.name}
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
        className="border border-gray-300 focus:border-green-200 px-2 py-1 rounded-xl bg-gray-200"
      />
    </>
  );
}

export default FormItem;
