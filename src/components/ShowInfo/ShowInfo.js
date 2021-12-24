import './show-info.sass'

const ShowInfo = ({show}) => {

    const {description,genres,rating, title, voteCount} = show

    return (
    <div className="show_info">
        <h1 className="movie_title">{title}
        {/* {date?` (${date.slice(0,4)})`:null} */}
        </h1>
        <div className='show_info-block'><i className="bi bi-star-fill fs-1"></i><span className="rating">{rating}</span> / {voteCount}</div>
        <div className='show_info-block'><span className="info_type">Genres:</span><span className='data'>
            {genres} 
            </span></div>
        {/* <div className='show_info-block'><span className="info_type">Runtime:</span><span className='data'> min.  /   </span></div> */}
        {/* <div className='show_info-block'><span className="info_type">Release date:</span><span className='data'> </span></div> */}
        {/* <div className='show_info-block'><span className="info_type">Director:</span><span className='data'>  </span></div> */}
        {/* <div className='show_info-block'><span className="info_type">Producers:</span><span className='data'></span></div> */}
        {/* <div className='show_info-block'><span className="info_type">Director of photography:</span><span className='data'></span></div> */}
        {/* <div className='show_info-block'><span className="info_type">Composers:</span><span className='data'></span></div> */}
        
        <div>
            <span className="info_type descr">Description: </span><br/>
            {description}
        </div>
    </div>
    )
}

export default ShowInfo