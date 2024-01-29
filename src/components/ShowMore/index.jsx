const ShowMore = ({ showMoreProduct }) => {
  return (
    <div className='row'>
      <button className='show_more m-auto' onClick={showMoreProduct}>
        Show More
      </button>
    </div>
  )
}

export default ShowMore
