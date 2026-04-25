import { useEffect, useState } from "react";

const TYPING_SPEED = 110;
const ERASING_SPEED = 70;
const HOLD_DELAY = 1400;

export function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let delay = isDeleting ? ERASING_SPEED : TYPING_SPEED;

    if (!isDeleting && displayText === currentWord) {
      delay = HOLD_DELAY;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
        return;
      }

      const nextText = isDeleting
        ? currentWord.slice(0, displayText.length - 1)
        : currentWord.slice(0, displayText.length + 1);

      setDisplayText(nextText);

      if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return displayText;
}
