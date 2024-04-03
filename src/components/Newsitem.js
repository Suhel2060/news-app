import React from 'react'

const Newsitem=(props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{position:"absolute",right:"2px"}}>
                        <span className="badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://deadline.com/wp-content/uploads/2024/01/Disney-headquarters-.jpg?w=1024"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}

                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default Newsitem
