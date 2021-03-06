import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='container my-3'>
            <div className="card">
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    right: 0,
                }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? 'https://www.atptour.com/-/media/images/news/2021/09/06/01/24/alcaraz12.jpg' : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? 'unknown' : author} on {new Date(date).toUTCString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
