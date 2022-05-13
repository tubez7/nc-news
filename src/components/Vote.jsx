import { useState } from "react";
import { updateVotes } from "../utils/api";
import { updateComment } from "../utils/api";

import Checkbox from "@mui/material/Checkbox";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownTwoTone from "@mui/icons-material/ArrowCircleDownTwoTone";
import ArrowCircleDownOutlined from "@mui/icons-material/ArrowCircleDownOutlined";

const Vote = ({ votes, articleId, commentId }) => {

  const [voteChange, setVoteChange] = useState(0);

  const [checked, setChecked] = useState(false);

  const [upChecked, setUpChecked] = useState(false);

  const [downChecked, setDownChecked] = useState(false);


  const classStr = articleId ? "article" : "comment";

  const handleChange = (voteClick) => {
    setChecked((currentChecked) => !currentChecked);

    setVoteChange((currentVote) => {
      return currentVote + voteClick;
    });

    if (articleId) {
      updateVotes(articleId, voteClick).catch(() => {
        alert("There was a problem registering your vote. Please try again.");
        setChecked((currentChecked) => !currentChecked);
        setDownChecked(false);
        setUpChecked(false);
        setVoteChange((currentVote) => {
          return currentVote - voteClick;
        });
      });
    } else {
      updateComment(commentId, voteClick).catch(() => {
        alert("There was a problem registering your vote. Please try again.");
        setChecked((currentChecked) => !currentChecked);
        setDownChecked(false);
        setUpChecked(false);
        setVoteChange((currentVote) => {
          return currentVote - voteClick;
        });
      });
    }
  };

  return (
    <div className={`${classStr}-vote`}>
      <Checkbox
        className={`${classStr}-up-vote`}
        checked={voteChange > 0}
        icon={<ArrowCircleUpOutlinedIcon />}
        sx={{color:"#97D4BF"}}
        checkedIcon={<ArrowCircleUpTwoToneIcon sx={{color:"green"}} />}
        size={classStr === "article" ? "large" : "medium"}
        onClick={() => {
          checked ? handleChange(-1) : handleChange(1);
          setUpChecked((currentUpChecked) => !currentUpChecked);
        }}
        disabled={downChecked}
      />
      {articleId && (
        <h4>
          {votes + voteChange}
          <br />
          {votes + voteChange === 1 || votes + voteChange === -1
            ? "Vote"
            : "Votes"}
        </h4>
      )}
      {commentId && (
        <h5 id="comvote-head">
          {votes + voteChange}
          <br />
          {votes + voteChange === 1 || votes + voteChange === -1
            ? "Vote"
            : "Votes"}
        </h5>
      )}
      <Checkbox
        className={`${classStr}-down-vote`}
        checked={voteChange < 0}
        icon={<ArrowCircleDownOutlined  />}
        sx={{color:"#F96574"}}
        checkedIcon={<ArrowCircleDownTwoTone sx={{color:"red"}} />}
        size={classStr === "article" ? "large" : "medium"}
        onChange={() => {
          checked ? handleChange(1) : handleChange(-1);
          setDownChecked((currentDownChecked) => !currentDownChecked);
        }}
        disabled={upChecked}
      />
    </div>
  );
};

export default Vote;