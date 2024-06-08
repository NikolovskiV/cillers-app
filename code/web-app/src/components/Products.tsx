import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  PRODUCT_ADDED_SUBSCRIPTION,
} from "../graphql/operations";
import Language from "./language";
import Chat from "./Chat";
import PdfCreator from "./PdfCreator";

export interface ChatMessageProps {
  message: string;
  isSentByCurrentUser: boolean;
}
export interface ChatHistoryProps {
  messages: ChatMessageProps[];
  sendMessage: (message: string) => void;
}
interface Product {
  id: string;
  name: string;
}

interface GetProductsQuery {
  products: Product[];
}
const Products: React.FC = () => {
  const [messages, setMessages] = useState([{message: "Hello",
  isSentByCurrentUser: true}, {message: "How are you?", isSentByCurrentUser: false}, {message: "I'm good, thanks!", isSentByCurrentUser: true}]);   
 

  const languages = ["English", "Spanish", "French", "Chinese", "Arabic"];
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLanguageSelect = (language: string) => {
    // if (selectedLanguage.includes(language)) {
    //   const newlangs: string[] = selectedLanguage.filter(
    //     (lang) => lang !== language
    //   );
    //   setSelectedLanguage(language);
    //   return;
    // }
    // const newlangs: string[] = [...selectedLanguage, language];
    setSelectedLanguage(language);
  };
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleNavigation = (nav: string) => {
    setNavigation(nav);
  }
  const [inputValue, setInputValue] = useState("");

  const [navigation, setNavigation] = useState("language");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="navbar bg-base-300 text-neutral-content">
        <div className="flex-1">
          <a href="/" className="p-2 normal-case text-xl text-blue-500">
            Coolest App
          </a>
        </div>
      </div>

      <div className="flex flex-grow justify-center items-center bg-neutral">
        <div className="card card-compact w-full max-w-lg bg-base-100 shadow-xl">
          <div className="card-body items-stretch text-center">
            <div className="form-control w-full"></div>
            {navigation === "language" ? (
              //the language should take in selectedLanguage, setSelectedLanguage, handleLanguageSelect, handleInputChange, languages, inputValue
              <Language
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                handleLanguageSelect={handleLanguageSelect}
                handleInputChange={handleInputChange}
                languages={languages}
                inputValue={inputValue}
                handleNavigation={handleNavigation}
              />
            ) : navigation === "chat" ? (
              <Chat 
              messages={messages }
              sendMessage={(message: string) => {
                setMessages([...messages, {message, isSentByCurrentUser: true}])
              }}
              handleNavigation={handleNavigation}
              />
              
            ) : navigation === "products" ? (
              <div />
            )
            : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
