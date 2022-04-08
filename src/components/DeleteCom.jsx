import { useState } from "react";
import { deleteComment } from "../utils/api";

export default function DeleteCom({ commentId, setComments, setComNum }) {
  const [error, setError] = useState(null);

  let comIndexToDelete = 0;

  let deletedCom = {};

  const handleClick = () => {
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
    deleteComment(commentId).catch((err) => {
      setError(err); // will use when adding login functionality
      setComNum((currentComNum) => currentComNum + 1);
      alert("Unable to delete comment");
      setComments((currentComments) => {
        const comClone = [...currentComments];
        comClone.splice(comIndexToDelete, 0, deletedCom);
        return comClone;
      });
    });
  };

  return (
    <div>
      {commentId && <button onClick={handleClick}>Delete</button>}
    </div>
  );
};
      
