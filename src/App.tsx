import { Outlet } from "react-router-dom";
import "./App.css";
import {
  TweetsContext,
  type TweetsContextValue,
} from "./contexts/TweetsContext";
import { useState } from "react";
import type { Tweet } from "./types/Tweet";
import { tweets as initialTweets } from "./data/tweets";

function App() {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  const context: TweetsContextValue = { tweets };

  return (
    <>
      <TweetsContext.Provider value={context}>
        <h1>Mon fil de tweets</h1>
        <Outlet />
      </TweetsContext.Provider>
    </>
  );
}

export default App;