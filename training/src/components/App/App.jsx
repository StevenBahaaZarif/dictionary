import React, { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import Navbar from "../navBar/navBar";

function App() {
  const [wordData, setWordData] = useState(null);
  const [font, setFont] = useState("serif");

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const searchWord = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      console.log(data);
      setWordData(data[0]);
    } catch (error) {
      console.error("Error fetching word:", error);
    }
  };

  const handleFontChange = (font) => {
    setFont(font);
    document.body.style.fontFamily = font;
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-black text-black dark:text-white flex  justify-center`}>
      <div className={`container max-w-3xl mx-auto bg-white dark:bg-black rounded-lg p-8  ${font}`}>
        <Navbar onSearch={searchWord} onFontChange={handleFontChange} onThemeToggle={toggleDarkMode} />
        <div className="mt-6">
          {wordData && <SearchResult wordData={wordData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
