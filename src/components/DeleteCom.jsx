import { deleteComment } from "../utils/api";


export default function DeleteCom({
  commentId,
  setComments,
  setComNum,
}) {

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
        <div>{commentId && <button onClick={handleClick}>Delete</button>}</div>
      );
    }
  };

  return (
    <div>{commentId && <button onClick={handleClick}>Delete</button>}</div>
  );
}
