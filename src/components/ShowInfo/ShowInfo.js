import './show-info.sass'

const ShowInfo = ({show}) => {

    const {description,genres,rating,title,voteCount,countries,homepage,
            numOfSeasons,tagline,firstEpisode,episodeRunTime} = show

    return (
    <div className="show_info">
        <h1 className="movie_title">{title}
        {/* {date?` (${date.slice(0,4)})`:null} */}
        </h1>
        <div className="show_info-block">{tagline? `"${tagline}"` : null}</div>
        <div className='show_info-block'>
            <i className="bi bi-star-fill fs-4"></i>
            <span className="rating">{rating}</span> / {voteCount}
        </div>
        <div className='show_info-block'><a className='homepage' href={homepage}>Homepage</a></div>
        <div className='show_info-block'><span className="info_type">Seasons:</span><span className='data'>{numOfSeasons}</span></div>
        <div className='show_info-block'><span className="info_type">Episode run time:</span><span className='data'>{episodeRunTime} min.</span></div>
        <div className='show_info-block'><span className="info_type">First episode:</span><span className='data'>{firstEpisode}</span></div>
        <div className='show_info-block'><span className="info_type">Genres:</span><span className='data'>{genres}</span></div>
        <div className='show_info-block'><span className="info_type">Сountries:</span><span className='data'>{countries}</span></div>
        
        <div>
            <span className="info_type descr">Description: </span><br/>
            {description}
        </div>
    </div>
    )
}

export default ShowInfo