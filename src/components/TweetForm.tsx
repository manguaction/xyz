import { useState } from "react";
import type { SubmitEvent, ChangeEvent } from "react";

const CONTENT_MAX_LENGTH = 280;

interface TweetFormProps {
  onSubmit: (content: string) => void;
}

export const TweetForm = ({ onSubmit }: TweetFormProps) => {
  const [content, setter] = useState<string>("");

  const envoyable =
    content.trim().length === 0 || content.length > CONTENT_MAX_LENGTH;

  const gererChangement = (evenement: ChangeEvent<HTMLTextAreaElement>) => {
    setter(evenement.target.value);
  };

  const gererSoumission = (
    evenement: SubmitEvent<HTMLFormElement>
  ): void => {
    evenement.preventDefault();

    const texteNettoye = content.trim();
    if (texteNettoye === "") {
      return;
    }

    onSubmit(texteNettoye);
    setter("");
  };

  return (
    <form onSubmit={gererSoumission}>
      <textarea
        value={content}
        onChange={gererChangement}
        placeholder="Quoi de neuf ?"
      />
      <p>{CONTENT_MAX_LENGTH - content.length} caractères restants</p>
      <button type="submit" disabled={envoyable}>
        Publier
      </button>
    </form>
  );
};