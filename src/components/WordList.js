import React from 'react';

const WordList = ({ words, onWordClick, onWordDoubleClick }) => {
  return (
    <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      {words.length === 0 ? (
        <p className="text-center text-gray-500">No words found.</p>
      ) : (
        <ul className="space-y-2">
          {words.map((wordData) => (
            <li
              key={wordData.word}
              onClick={() => onWordClick(wordData.word)}
              onDoubleClick={() => onWordDoubleClick(wordData.word)}
              className="p-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <h3 className="text-xl font-medium">{wordData.word}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WordList;
