"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        borderRadius: "20px",
        padding: "15px",
        color: "#fff",
      }}
    >
      {/* AUDIO */}
      <audio ref={audioRef} src="/taylor.mp3" />

      {/* CONTROLS */}
      <div
        style={{
          marginTop: "-218px",
          marginLeft: "90px",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          gap: "20px",
        }}
      >
        <button onClick={togglePlay} style={btnStyle}>
          <img
            src={isPlaying ? "/pause.png" : "/play.png"}
            alt="play"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
};
