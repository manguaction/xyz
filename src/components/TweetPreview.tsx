import type { Tweet } from "../types/Tweet";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TweetPreviewProps {
  tweet: Tweet;
  linktoDetail?: boolean;
}

export const TweetPreview = ({ tweet, linktoDetail = true,}: TweetPreviewProps): React.JSX.Element => {
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

      {linktoDetail && (
        <Link to={`/tweets/${tweet.id}`}>
          Voir la discussion
        </Link>
      )}

      {tweet.image && (
        <Link to={`/tweets/${tweet.id}`}>
          <img src={tweet.image.url} alt="Image du tweet" />
        </Link>
      )}
    </div>
  );
};