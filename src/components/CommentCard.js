import "../css/Comments.css"
import dateModifier from "../utils/functions/dateModifier"
import { deleteCommentByCommentId } from "../utils/apiCalls"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

const CommentCard = ({
  comment_id,
  author,
  body,
  created_at,
  votes,
  setComments
}) => {

  const { user } = useContext(UserContext);

  const handleClick = () => {
    setComments((currentComments) => {
      return currentComments.filter((comment) => {
        return comment.comment_id !== comment_id; 
       })
    });
    deleteCommentByCommentId(comment_id);
  }

  let currentUser = true;
  if (user.username === author) {
    currentUser = false;
  }

  return(
    <section className="comment-card">
      <h4 className="comment-author">{author}</h4>
      <h4 className="comment-body">
        {`${body} `}
        <button className="delete-comment-button" disabled={currentUser} onClick={handleClick}>X</button>
      </h4>
      <h4 className="comment-date">{dateModifier(created_at)}</h4>
      <h4 className="comment-votes">Rating: {votes}</h4>
    </section>
    
  )
}

export default CommentCard;