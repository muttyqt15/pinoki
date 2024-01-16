import React, { useState } from "react";
import { FormProps } from "../types";
import FormItem from "./FormItem";
import "../../tailwind.css"
const Form = (
  p: FormProps & { className?: string } & { buttonPrompt: string }
) => {
  const getInitialState = () => {
    let initialState: any = {};
    p.fields.forEach((field) => {
      initialState[field.property] = field.value;
    });
    return initialState;
  };
  const [state, setState] = useState(getInitialState());
  const handleChange = (property: string, value: string | boolean) => {
    setState((state: any) => ({ ...state, [property]: value }));
  };

  const handleSubmit = () => {
    p.onSubmit(state);
    setState(getInitialState());
  };

  const handleGoback = () => {

  }
  return (
    <>
      <section className="max-w-72 p-4 rounded-xl">
        <form className="flex flex-col gap-3">
          {p.fields.map((field, i) => {
            return (
              <FormItem
                key={i}
                {...field}
                onChange={handleChange}
                value={state[field.property]}
                className=""
              />
            );
          })}
        </form>
        <div className="flex justify-end items-center gap-3 mt-4 w-full">
          <button className="w-10 h-10 bg-[#35D78E] border rounded-2xl text-white items-center flex justify-center text-center text-3xl hover:bg-green-400 transition transform duration-300 ease-in-out">+</button>
          <button type="submit" onClick={handleSubmit} className="text-lg border rounded-lg px-2 bg-[#35D78E] text-white py-1 hover:bg-green-400 transition transform duration-300 ease-in-out">  
            {p.buttonPrompt}
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
