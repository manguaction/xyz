import { TweetList } from "../components/TweetsList";
import { TweetPreview } from "../components/TweetPreview";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function TweetDetailsPage() {
    const { tweets, toggleLike } = useContext(TweetsContext)!;
    const { id } = useParams<{ id: string }>();

    const tweet = tweets.find((tweet) => tweet.id === id);

    const replies = tweets.filter((tweet) => tweet.parentId === id);
    const titre = tweet
        ? `Tweet de ${tweet.authorName}`
        : "Tweet introuvable";

        useDocumentTitle(titre);

    if (!tweet) {
        return (
            <>
                <p>Ce tweet n'existe pas</p>
                <Link to="/">Retour</Link>
            </>
        );
    }

    return (
        <>
            <TweetPreview tweet={tweet} linktoDetail={false} onToggleLike={toggleLike}/>

            {
                replies.length === 0
                    ? <p>Ce tweet n'a pas de réponse</p>
                    : <TweetList tweets={replies} onToggleLike={toggleLike} />
            }
        </>
    );
}

export default TweetDetailsPage;