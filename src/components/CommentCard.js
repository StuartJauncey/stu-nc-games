const CommentCard = ({
  comment_id,
  author,
  body,
  created_at,
  votes
}) => {
  return(
    <section>
      <h4>{author}</h4>
      <h4>{body}</h4>
      <h4>{created_at}</h4>
      <h4>Votes: {votes}</h4>
    </section>
    
  )
}

export default CommentCard;