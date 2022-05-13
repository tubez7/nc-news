import { deleteComment } from "../utils/api";

import IconButton from "@mui/material/IconButton";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

export default function DeleteCom({ commentId, setComments, setComNum }) {
  let comIndexToDelete = 0;

  let deletedCom = {};

  const handleClick = () => {
    if (window.confirm("Are you sure you wish to delete this comment?")) {
      setComments((currentComments) => {
        comIndexToDelete = currentComments.findIndex(
          (comment) => comment.comment_id === commentId
        );
        deletedCom = currentComments[comIndexToDelete];
        setComNum((currentComNum) => currentComNum - 1);

        return currentComments.filter(
          (comment) => comment.comment_id !== commentId
        );
      });
      deleteComment(commentId).catch(() => {
        setComNum((currentComNum) => currentComNum + 1);
        alert("Unable to delete comment");
        setComments((currentComments) => {
          const comClone = [...currentComments];
          comClone.splice(comIndexToDelete, 0, deletedCom);
          return comClone;
        });
      });
    } else {
      return (
        <div className="com-delete">
          {commentId && (
            <IconButton
              className="IconButton"
              aria-label="delete"
              size="large"
              onClick={handleClick}
            >
              <DeleteTwoToneIcon fontSize="inherit" />
            </IconButton>
          )}
        </div>
      );
    }
  };

  return (
    <div className="com-delete">
      {commentId && (
        <IconButton
          className="IconButton"
          aria-label="delete"
          size="large"
          onClick={handleClick}
        >
          <DeleteTwoToneIcon fontSize="inherit" />
        </IconButton>
      )}
    </div>
  );
}
