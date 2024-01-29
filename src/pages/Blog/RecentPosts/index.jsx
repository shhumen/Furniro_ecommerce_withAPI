const RecentPosts = ({ recent_blogs }) => {
  return (
    <div className='recent-posts m-5'>
      <h2>Recent Posts</h2>
      {recent_blogs?.map((post) => {
        return (
          <div className='post' key={post.id}>
            <div className='post-img'>
              <img src={post.imageUrls[0]} alt='blog-post1' />
            </div>
            <div>
              <p>{post.header}</p>
              <span>{post.createdDate}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RecentPosts
