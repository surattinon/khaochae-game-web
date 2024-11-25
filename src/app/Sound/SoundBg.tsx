import { useEffect, useRef } from "react";

const SoundBg = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/sounds/bg-sound.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default SoundBg;
