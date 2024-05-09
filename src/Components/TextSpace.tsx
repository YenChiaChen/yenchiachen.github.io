import React from 'react';

interface CharacterDisplayProps {
  text: string; 
}

const TextSpaceBetween: React.FC<CharacterDisplayProps> = ({ text }) => {
  return (
    <div className="justify-between flex">
      {text.split('').map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

export default TextSpaceBetween;
