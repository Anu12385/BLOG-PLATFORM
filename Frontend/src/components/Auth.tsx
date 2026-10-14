import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { SignupInput } from "anu089-medium";
import axios from "axios";
import { BACKEND_URL } from "../backendconfig";

export function Auth({ type }: { type: "signin" | "signup" }) {
  const [postinput, setpostinput] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  const dive = useNavigate();

  async function Datapost() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${
          type === "signin" ? "signin" : "signup"
        }`,
        postinput
      );

      console.log(response.data);

      // Backend returns JWT directly using c.text(token)
      const token = response.data;

      localStorage.setItem("token", token);

      dive("/blogs");
    } catch (error) {
      console.log(error);
      console.log("Backend connection failed");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col bg-slate-400">
      <div className="flex justify-center">
        <div>
          <div className="px-7">
            <div className="font-extrabold text-3xl">
              {type === "signup" ? "Create an account" : "Welcome back"}
            </div>

            <div>
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}

              <Link
                to={type === "signup" ? "/signin" : "/signup"}
                className="pl-2 underline"
              >
                {type === "signup" ? "Sign in" : "Sign up"}
              </Link>
            </div>
          </div>

          <div className="mt-7">
            {type === "signup" ? (
              <LabelledInput
                label="NAME"
                placeholder="Type Name"
                onChange={(e) => {
                  setpostinput({
                    ...postinput,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}

            <LabelledInput
             label="EMAIL"
             placeholder="Type Email"
              onChange={(e) => {
                setpostinput({
                  ...postinput,
                  email: e.target.value,
                });
              }}
            />

            <LabelledInput
              label="PASSWORD"
              type="password"
              placeholder="123456"
              onChange={(e) => {
                setpostinput({
                  ...postinput,
                  password: e.target.value,
                });
              }}
            />

            <button
              onClick={Datapost}
              className="w-full mt-4 rounded-md bg-slate-800 py-2 px-4 text-sm text-white"
              type="button"
            >
              {type === "signin" ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputProps) {
  return (
    <div className="container">
      <label className="block mb-2 ml-1 mt-2 text-sm font-medium text-gray-900">
        {label}
      </label>

      <div className="webflow-style-input">
        <input
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}