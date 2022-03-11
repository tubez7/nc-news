import { useState } from "react";
import { updateVotes } from "../utils/api";

const Vote = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleClick = (voteClick) => {
    setVoteChange((currentVote) => {
      return currentVote + voteClick;
    });
    
    updateVotes(article_id, voteChange).catch(() => {
      setVoteChange((currentVote) => {
        return currentVote - voteClick;
      });
    });
  };

  return (
    <>
      <h4>VOTES: {votes + voteChange}</h4>
      <span>VOTE -{"   "}</span>
      <button className="up-vote" disabled={voteChange > 0} onClick={() => handleClick(1)}>
        +
      </button>
      <button className="down-vote" disabled={voteChange < 0} onClick={() => handleClick(-1)}>
        -
      </button>
    </>
  );
};

export default Vote;
