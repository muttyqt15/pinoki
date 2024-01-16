import React, { useState } from "react";
import { FormProps } from "../types";
import FormItem from "./FormItem";

const Form = (p: FormProps & { className?: string } & { buttonPrompt: string }) => {
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
    // }
  };
  return (
    <>
      <section className="max-w-72 p-4 rounded-xl">
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
            className="blue-btn">
            {p.buttonPrompt}
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
