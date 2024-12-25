"use client";

import { useState } from "react";

const Form = () => {
  const [prediction, setPrediction] = useState(null);
  const [emailText, setEmailText] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setEmailText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailText),
      });

      const pred = await response.json()
      console.log(pred)
      setPrediction(pred.prediction)
      // setEmailText("")
    } catch (error) {}
  };
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center gap-8"
      >
        <h2 className="font-medium italic text-xl ">Enter your mail here: </h2>
        <textarea
          value={emailText}
          onChange={handleInputChange}
          type="textarea"
          className="bg-stone-800 border-white border-1 rounded-lg px-4 py-4 text-white h-[20vh] w-[40vw] text-nowrap"
        />
        <button
          onClick={handleSubmit}
          disabled={!emailText.trim()}
          className={`rounded-md bg-green-600 font-semibold text-lg px-5 py-3 ${
            emailText.length <= 0 && "opacity-50"
          }`}
        >
          Check
        </button>
      </form>
      <h1 className={`${prediction ? 'block' : 'hidden'} font-semibold text-xl`}>{prediction}</h1>
    </>
  );
};

export default Form;
