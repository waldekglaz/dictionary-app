import React, { useState } from "react";
import PlayIcon from "./../assets/images/icon-play.svg";
import { v4 as uuid4 } from "uuid";

const ResultHeader = ({ word, phonetic, phonetics }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayAudio = () => {
    const audio = document.getElementById("audio");
    setIsPlaying(true);
    audio.play();
  };
  const audioList = phonetics
    .map((el, i) => {
      const hasAudio = el.audio.length > 0;
      return (
        <div key={`${el.audio}${i}`}>
          {hasAudio && (
            <div>
              <button className="w-12 md:w-20" onClick={handlePlayAudio}>
                <img src={PlayIcon} alt="play button" />
              </button>
              <audio className="w-28" id="audio" src={el.audio}></audio>
            </div>
          )}
        </div>
      );
    })
    .find((el) => el.key.length > 7);

  return (
    <div className="pt-12 flex justify-between items-center	mb-8">
      <div className="">
        <h1 className="text-3xl md:text-6xl font-bold pb-2">{word}</h1>
        <div className="text-violet-600 text-2xl">{phonetic}</div>
      </div>
      {audioList}
    </div>
  );
};

export default ResultHeader;
