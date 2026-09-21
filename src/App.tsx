import { TweetList } from "./components/TweetsList";
import type { Tweet } from "./types/Tweet";
import "./App.css";

import { tweets } from "./data/tweets";

function App() {
  return (
    <>
      <h1>Mon fil de tweets</h1>
      <TweetList tweets={tweets} />
    </>
  );
}

export default App;
