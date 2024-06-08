import React, { useState } from "react";

interface LanguageProps {
  selectedLanguage: string;
  setSelectedLanguage: (languages: string) => void;
  handleLanguageSelect: (language: string) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  languages: string[];
  inputValue: string;
  handleNavigation: (nav: string) => void;
}

export default function Language({
  selectedLanguage,
  setSelectedLanguage,
  handleLanguageSelect,
  handleInputChange,
  languages,
  inputValue,
  handleNavigation,
}: LanguageProps) {
  return (
    <>
      <h1 className="card-title self-center text-2xl font-bold mb-4">
        Select your language
      </h1>
      <div className="join">
        <input
          type="text"
          placeholder="Select your language"
          className="join-item flex-grow input input-bordered input-md input-primary"
          onChange={handleInputChange}
        />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 h-120">
        {languages
          .filter((lang) =>
            lang.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((lang) => {
            return (
              <li
                onClick={() => handleLanguageSelect(lang)}
                className={`bg-white shadow-md rounded-md p-4 cursor-pointer text-left w-full ${
                  selectedLanguage.includes(lang) ? "bg-green-100" : ""
                }`}
                key={lang}
              >
                {lang}
              </li>
            );
          })}
      </ul>

      <div
        className=" w-114 h-16 left-141 top-768 font-inter font-medium text-white text-lg bg-blue-500 rounded-full p-4 cursor-pointer text-center"
        onClick={() => handleNavigation("chat")}
      >
        <p>Start Interview</p>
      </div>
    </>
  );
}
