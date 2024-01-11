"use client";

import Form from "@/components/Form";
import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { User } from "firebase/auth";
import { set } from "firebase/database";
const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSignup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <Form
        className="border-2 rounded-xl border-gray-400 p-4"
        fields={[
          {
            property: "email",
            name: "Email",
            type: "email",
            placeholder: "Email",
            value: "",
            required: true,
          },
          {
            property: "password",
            name: "Password",
            type: "password",
            placeholder: "Password",
            value: "",
            required: true,
          },
        ]}
        onSubmit={handleSignup}
        buttonPrompt="Sign Up"
      />
    </div>
  );
};

export default SignUp;
