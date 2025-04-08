import React, { useState } from "react";
import { toast } from "react-hot-toast";

const TextBox = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUp = () => {
    if (!text.trim()) {
      toast.error("Please enter some text to convert");
      return;
    }
    setText(text.toUpperCase());
    toast.success("Converted to UPPERCASE");
  };

  const handleDown = () => {
    if (!text.trim()) {
      toast.error("Please enter some text to convert");
      return;
    }
    setText(text.toLowerCase());
    toast.success("Converted to lowercase");
  };

  const handleClear = () => {
    if (!text.trim()) {
      toast.error("Text is already empty");
      return;
    }
    setText("");
    toast.success("Text cleared");
  };

  const handleCopy = () => {
    if (!text.trim()) {
      toast.error("Nothing to copy");
      return;
    }
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const handleSpaces = () => {
    if (!text.trim()) {
      toast.error("Nothing to format");
      return;
    }
    const newText = text.split(/\s+/).join(" ");
    setText(newText);
    toast.success("Extra spaces removed");
  };

  const handleSpeak = () => {
    if (!text.trim()) {
      toast.error("Nothing to speak");
      return;
    }

    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);

    toast.success("Speaking...");
  };

  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  const charCount = text.length;
  const readingSpeed = 150;
  const minutesRead = (wordCount / readingSpeed).toFixed(2);

  return (
    <div className="w-screen my-8 mt-24 font-[Poppins]">
      <h1 className="text-2xl font-bold mb-6 text-blue-900 text-center">
        "Text magic at your fingertips — just type and transform."
      </h1>

      <div className="px-4 max-w-6xl mx-auto">
        <textarea
          className="w-full p-5 rounded-xl border-2 border-blue-200 bg-white/90 text-blue-900 placeholder:text-blue-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          rows="8"
          value={text}
          onChange={handleChange}
          placeholder="Type or paste your text here..."
        ></textarea>

        <div className="my-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={handleUp}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Upper Case
          </button>
          <button
            onClick={handleDown}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Lower Case
          </button>
          <button
            onClick={handleClear}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Clear
          </button>
          <button
            onClick={handleCopy}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Copy
          </button>
          <button
            onClick={handleSpaces}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Remove Spaces
          </button>
          <button
            onClick={handleSpeak}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Speak Text 🔊
          </button>
        </div>

        <div className="mt-8 text-blue-900 bg-white/90 rounded-2xl p-6 shadow-xl border border-blue-100 transition-all">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-blue-200">
            📄 Text Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base text-blue-800 mb-4">
            <div className="bg-blue-50 rounded-lg p-4 shadow-inner">
              <p className="font-semibold">Words</p>
              <p className="text-xl font-bold">{wordCount}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow-inner">
              <p className="font-semibold">Characters</p>
              <p className="text-xl font-bold">{charCount}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow-inner">
              <p className="font-semibold">Reading Time</p>
              <p className="text-xl font-bold">{minutesRead} min</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2 border-b pb-2 border-blue-200">
              🔍 Preview
            </h2>
            <div className="bg-blue-50 rounded-lg p-4 text-gray-800 min-h-[100px] whitespace-pre-wrap">
              {text ? (
                text
              ) : (
                <span className="text-gray-400 italic">Nothing to Preview</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
