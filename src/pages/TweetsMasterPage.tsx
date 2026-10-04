import { TweetList } from "../components/TweetsList";
import { TweetForm } from "../components/TweetForm";
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function TweetsMasterPage() {
  const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;

  const mainTweets = tweets.filter((tweet) => !tweet.parentId);

  let totallike: number = 0;

  mainTweets.forEach((tweet) => {
      totallike += tweet.likes
  })

  useDocumentTitle("Accueil")
  return (
    <>
      <TweetForm onSubmit={addTweet} />
      <div>{totallike} mentions J'aime</div>
      <br/>
      <TweetList tweets={mainTweets} onToggleLike={toggleLike} />
      
    </>
  );
}

export default TweetsMasterPage;