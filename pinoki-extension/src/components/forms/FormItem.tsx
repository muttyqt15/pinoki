import React, { ChangeEvent } from "react";
import { FormItemProps, OutputProps } from "../types";
import "../styles/fonts.css";
import "../../tailwind.css";

export default function FormItem(
  p: FormItemProps & OutputProps & { className?: string }
) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onChange(p.property, e.target.value);
  };

  return (
    <>
      <label htmlFor={p.property} className="signika">
        {p.name}
      </label>
      <input
        type={p.type}
        required={p.required}
        onChange={handleChange}
        autoComplete="off"
        className="border border-gray-300 focus:border-green-200 px-2 py-1 rounded-xl bg-gray-200"
      />
    </>
  );
}
