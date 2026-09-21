import type { Tweet } from "../types/Tweet";
import { useState } from "react";

interface TweetPreviewProps {
  tweet: Tweet;
}

export const TweetPreview = ({ tweet }: TweetPreviewProps): React.JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongContent = tweet.content.length > 180;

  const displayedContent =
    isLongContent && !isExpanded
      ? `${tweet.content.substring(0, 180)}...`
      : tweet.content;

  return (
    <div className="tweet-preview">
      <strong>{tweet.authorName}</strong>
      <span>@{tweet.authorHandle}</span>
      <p>{displayedContent}</p>

      {isLongContent && (
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
};