import { Outlet } from "react-router-dom";
import "./App.css";
import {
  TweetsContext,
  type TweetsContextValue,
} from "./contexts/TweetsContext";
import { useState } from "react";
import type { Tweet } from "./types/Tweet";
import { tweets as initialTweets } from "./data/tweets";

export const App = () => {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  const addTweet = (content: string): void => {
  const createdAt: string = new Date().toISOString();


  const nouveauTweet: Tweet = {
      id: crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content: content,
      createdAt,
      likes: 0,
      likedByMe: false,
    };


    setTweets((ancienTableau) => [nouveauTweet, ...ancienTableau]);
  };

  const toggleLike = (id: string): void => {
  setTweets((ancienTableau) => {
    return ancienTableau.map((tweet) => {
      if(tweet.id === id){
        return {
        ...tweet,
        likedByMe: !tweet.likedByMe,
        likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1,
}};
        return tweet;
    });
  });
};

  const context: TweetsContextValue = {
    tweets,
    addTweet,
    toggleLike,
  };

  return (
    <TweetsContext.Provider value={context}>
      <header>
        <img src="/xyz.png" alt="logo XYZ"/>
        <h1>Mon fil de tweets</h1>
      </header>
      <Outlet />
    </TweetsContext.Provider>
  );
};

export default App;