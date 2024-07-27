import { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";
import "./Audio.css";

const Audio = () => {
  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "hn",
  });
  const [storedTranscript, setStoredTranscript] = useState("");
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    if (transcript) {
      setStoredTranscript(transcript);
      extractKeywords(transcript);
    }
  }, [transcript]);

  const extractKeywords = (text) => {
    const commonWords = [
      "trainer",
      "course",
      "session",
      "location",
      "date",
      "time",
    ];
    const words = text
      .split(" ")
      .filter((word) => !commonWords.includes(word.toLowerCase()));
    setKeywords([...new Set(words)]); // Using a Set to remove duplicates
  };

  return (
    <div className="transcription-container flex flex-col gap-6">
      <div className="control-buttons flex gap-6">
        <Mic onClick={startListening} role="button" className="mic-button" />
        <MicOff
          onClick={stopListening}
          role="button"
          className="mic-off-button"
        />
      </div>
      <h2 className="transcript-text">{storedTranscript}</h2>
      {keywords.length > 0 && (
        <div className="keywords-container">
          <h3>Extracted Keywords:</h3>
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Audio;
