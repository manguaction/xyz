import { TweetList } from "../components/TweetsList";
import { TweetPreview } from "../components/TweetPreview";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";

function TweetDetailsPage() {
    const { tweets } = useContext(TweetsContext)!;
    const { id } = useParams<{ id: string }>();

    const tweet = tweets.find((tweet) => tweet.id === id);

    const replies = tweets.filter((tweet) => tweet.parentId === id);

    if (!tweet) {
        return (
            <>
                <p>Le tweet n'existe pas</p>
                <Link to="/">Retour</Link>
            </>
        );
    }

    return (
        <>
            <TweetPreview tweet={tweet} linktoDetail={false} />

            {
                replies.length === 0
                    ? <p>Ce tweet n'a pas de réponse</p>
                    : <TweetList tweets={replies} />
            }
        </>
    );
}

export default TweetDetailsPage;