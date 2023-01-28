import "./css/blog-post.css"

function BlogPost({
    title,
    description
}) {
  return (
    <div className='blog-post'>
      <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}


export default BlogPost;