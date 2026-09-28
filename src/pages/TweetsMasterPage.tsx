import { TweetList } from "../components/TweetsList";
import { tweets } from "../data/tweets";

function TweetsMasterPage() {
  return <TweetList tweets={tweets} />;
}

export default TweetsMasterPage;