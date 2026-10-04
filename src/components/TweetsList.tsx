import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

export type TweetListProps = {
  tweets: Array<Tweet>;
  onToggleLike : (id:string) =>void;
};

export const TweetList = ({ tweets, onToggleLike }: TweetListProps): React.JSX.Element => {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetPreview key={tweet.id} tweet={tweet} onToggleLike={onToggleLike} />
      ))}
    </div>
  );
};