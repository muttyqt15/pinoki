"use client";
import React, { useState } from "react";
import { FormProps } from "@/types/formInterfaces";
import FormItem from "./FormItem";
import { cn } from "@/lib/utils";

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
  const [error, setError] = useState(false);
  const handleChange = (property: string, value: string | boolean) => {
    setState((state: any) => ({ ...state, [property]: value }));
  };

  const handleSubmit = () => {
    // // Check for missing required fields before submission
    // const missingFields = p.fields.filter(
    //   (field) => field.required && !state[field.property]
    // );

    // if (missingFields.length > 0) {
    //   // Handle missing required fields (you can show an error, prevent submission, etc.)
    //   console.error(
    //     "Missing required fields:",
    //     missingFields.map((field) => field.property)
    //   );
    //   setError(true);
    // } else {
    //   // All required fields are filled, proceed with form submission
    p.onSubmit(state);
    setState(getInitialState());
    // }
  };
  return (
    <>
      <section className={cn("max-w-72 p-4 rounded-xl", p.className)}>
        <form className="flex flex-col">
          {p.fields.map((field, i) => {
            return (
              <FormItem
                key={i}
                {...field}
                onChange={handleChange}
                value={state[field.property]}
                className="m-2"
              />
            );
          })}
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="border-2 p-1 rounded-xl mx-2 px-3 text-slate-500 hover:text-black hover:shadow-md transition transform duration-500 ease-in-out">
            {p.buttonPrompt}
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
