import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

export type TweetListProps = {
  tweets: Array<Tweet>;
};

export const TweetList = ({ tweets }: TweetListProps): React.JSX.Element => {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetPreview key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};