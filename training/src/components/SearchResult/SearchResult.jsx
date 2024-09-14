import React,{Link} from "react";

const SearchResult = ({ wordData }) => {
  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };
  return (
    <div className="p-6 bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-6xl font-bold mb-0">{wordData.word}</h1>
        
        {/* Add play button for audio */}
        {wordData.phonetics.length > 0 && wordData.phonetics[0].audio && (
          <button
            onClick={() => playAudio(wordData.phonetics[0].audio)}
            className="w-10 h-10 bg-purple-300 text-white rounded-full flex justify-center items-center hover:bg-purple-700 transition-colors duration-300"
            aria-label="Play pronunciation"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>          </button>
        )}
      </div>

      {/* Loop over phonetics */}
      {wordData.phonetics.slice(1).map((phonetic, index) => (
        <div key={index} className="flex items-center space-x-3 mb-3">
          {/* Display the phonetic text */}
          {index === 0 && phonetic.text && <p  className="text-xl font-medium text-purple-600 mb-3">{phonetic.text}</p>}
        </div>
      ))}

      {/* Loop over meanings */}
      {wordData.meanings.map((meaning, index) => (
        <div key={index} className="my-4">
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white mb-5">{meaning.partOfSpeech}</h3>
          <ul className="list-disc list-inside pl-5 mb-2">
            {meaning.definitions.map((definition, idx) => (
              <li key={idx} className="text-base">{definition.definition}</li>
            ))}
          </ul>

        </div>
      ))}
                <a href={wordData.sourceUrls}><h3 className="text-lg font-semibold mb-2 text-black dark:text-white mb-5">{wordData.sourceUrls}</h3>
                </a>

      
    </div>
  );
};

export default SearchResult;
