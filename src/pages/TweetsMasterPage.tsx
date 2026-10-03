import { TweetList } from "../components/TweetsList";
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";

function TweetsMasterPage() {
  const { tweets } = useContext(TweetsContext)!;
  tweets.filter((tweet) => !tweet.parentId )
  return <TweetList tweets={tweets} />;
  
}

export default TweetsMasterPage;