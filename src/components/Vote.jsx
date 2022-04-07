import { useState } from "react";
import { updateVotes } from "../utils/api";

const Vote = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleClick = (voteClick) => {
    setVoteChange((currentVote) => {
      return currentVote + voteClick;
    });

    updateVotes(article_id, voteChange).catch(() => {
      alert("There was a problem registering your vote. Please try again.")
      setVoteChange((currentVote) => {
        return currentVote - voteClick;
      });
    });
  };

  return (
    <div className="vote-block">
      <h4>{votes + voteChange} Votes</h4>
      <button
        className="up-vote"
        disabled={voteChange > 0}
        onClick={() => handleClick(1)}
      >
        +
      </button>
      <button
        className="down-vote"
        disabled={voteChange < 0}
        onClick={() => handleClick(-1)}
      >
        -
      </button>
    </div>
  );
};

export default Vote;
