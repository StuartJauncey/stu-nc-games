import { useState } from "react";
import { patchCommentVotesByCommentId } from "../utils/apiCalls";

const CommentRater = ({ rating, comment_id }) => {

  const [voteChange, setVoteChange] = useState(0);

  const handleClickLike = () => {
    setVoteChange((currentVotes) => {
      return currentVotes + 1;
    })
    console.log(typeof comment_id);
    patchCommentVotesByCommentId(comment_id, 1);
  }
  
  return (
    <section className="comment-voter">
      <button onClick={handleClickLike}>Like</button>
      <button>Dislike</button>
      <h5>{rating + voteChange}</h5>
    </section>
  )
}

export default CommentRater;