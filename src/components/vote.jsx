import { useState } from "react";
import { updateVotes } from "../utils/api";

const Vote = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleClick = (voteClick) => {
    setVoteChange((currentVote) => {
      return currentVote + voteClick;
    });
    console.log(article_id, voteChange, "inside handleClick");
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
      <button class="fa fa-thumbs-o-up" className="up-vote" disabled={voteChange > 0} onClick={() => handleClick(1)}>
        +
      </button>
      <button class="fa fa-thumbs-o-down" className="down-vote" disabled={voteChange < 0} onClick={() => handleClick(-1)}>
        -
      </button>
    </>
  );
};

export default Vote;
