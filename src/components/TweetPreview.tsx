import type { Tweet } from "../types/Tweet";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TweetPreviewProps {
  tweet: Tweet;
  linktoDetail?: boolean;
  onToggleLike:(id:string) => void;
}

export const TweetPreview = ({ tweet, linktoDetail = true, onToggleLike}: TweetPreviewProps): React.JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongContent = tweet.content.length > 180;

  const jaime = tweet.likedByMe;

  const formatTime = (datestring :string) : string => {
    const date = new Date(datestring);
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${hours}:${minutes}`;
};

  const time = formatTime(tweet.createdAt)

  const displayedContent =
    isLongContent && !isExpanded
      ? `${tweet.content.substring(0, 180)}...`
      : tweet.content;

  return (
    <div className="tweet-preview">
      <strong>{tweet.authorName} </strong>
      <span>{tweet.authorHandle} </span>
      <span>{time} </span>

      
      

      
<br/>

{tweet.image && (
  linktoDetail ? (
    <Link to={`/tweets/${tweet.id}`}>
      <img src={tweet.image.url} alt={tweet.image.alt} className="classimagetweet" />
    </Link>
  ) : (
    <img src={tweet.image.url} alt={tweet.image.alt} className="classimagetweet"  />
  )
)}


      



  <p>{displayedContent}</p>

   <br/>
      {isLongContent && (
            <button onClick={() => setIsExpanded((prev) => !prev)}>
              {isExpanded ? "Voir moins" : "Voir plus"}
            </button>
          )}
      

  

<br/><br/>

<button onClick={() => onToggleLike(tweet.id)}>
        {jaime ? "Je n'aime plus" : "J'aime"}
        {tweet.likes}
      </button>

      
<br/>

      {linktoDetail &&(
        <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>
      )}
      
<br/><br/><br/>
    </div>

  );
};