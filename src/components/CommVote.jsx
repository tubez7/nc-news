import { useState } from "react";
import { updateComment } from "../utils/api";

export default function CommVote({ votes, commentId }) {

    const [voteChange, setVoteChange] = useState(0);

    const handleClick = (voteClick) => {
        setVoteChange((currentVote) => {
            return currentVote + voteClick;
        });

        updateComment(commentId, voteClick).catch(() => {
            alert("There was a problem registering your vote. Please try again.");
            setVoteChange((currentVote) => {
                return currentVote - voteClick;
            });
        });
    };

  return (
    <div className="comment-vote">
      <h5 id="comvote-head">{votes + voteChange} {votes + voteChange === 1 || -1 ? "Vote" : "Votes"}</h5>
      <button className="comment-up-vote" disabled={voteChange > 0} onClick={() => handleClick(1)}>+</button>
      <button className="comment-down-vote" disabled={voteChange < 0} onClick={() => handleClick(-1)}>-</button>
    </div>
  );
};
