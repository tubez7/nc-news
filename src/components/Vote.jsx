import { useState } from "react";
import { updateVotes } from "../utils/api";
import { updateComment } from "../utils/api";

const Vote = ({ votes, articleId, commentId }) => {
  
  const [voteChange, setVoteChange] = useState(0);

  const classStr = articleId ? "article" : "comment";
  
  const handleClick = (voteClick) => {
    setVoteChange((currentVote) => {
      return currentVote + voteClick;
    });

    if (articleId) {
      updateVotes(articleId, voteClick).catch(() => {
        alert("There was a problem registering your vote. Please try again.");
        setVoteChange((currentVote) => {
          return currentVote - voteClick;
        });
      });
    } else {
      updateComment(commentId, voteClick).catch(() => {
        alert("There was a problem registering your vote. Please try again.");
        setVoteChange((currentVote) => {
          return currentVote - voteClick;
        });
      });
    }
  };

  return (
    <div className={`${classStr}-vote`}>
      {articleId && (
        <h4>
          {votes + voteChange}{" "}
          {votes + voteChange === 1 || votes + voteChange === -1
            ? "Vote"
            : "Votes"}
        </h4>
      )}
      {commentId && (
        <h5 id="comvote-head">
          {votes + voteChange}{" "}
          {votes + voteChange === 1 || votes + voteChange === -1
            ? "Vote"
            : "Votes"}
        </h5>
      )}
      <button
        className={`${classStr}-up-vote`}
        disabled={voteChange > 0}
        onClick={() => handleClick(1)}
      >
        +
      </button>
      <button
        className={`${classStr}-down-vote`}
        disabled={voteChange < 0}
        onClick={() => handleClick(-1)}
      >
        -
      </button>
    </div>
  );
};

export default Vote;
