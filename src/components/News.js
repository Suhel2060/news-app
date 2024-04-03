import React, { useEffect,useState } from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=> {
  
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
   const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

        // document.title = `${this.capitalizeFirstLetter(props.catagory)} - Hamro News`


    const updateNews=async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedata = await data.json();
        props.setProgress(70);
        setArticles(parsedata.articles);
        settotalResults(parsedata.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

useEffect(() => {
   updateNews();
    document.title = `${capitalizeFirstLetter(props.catagory)} - Hamro News`
}, [])

    const fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 });
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticles(articles.concat(parsedata.articles));
        settotalResults(parsedata.totalResults);
    };




        return (
            <>
                <h1 className=" text-center" style={{marginTop: "5rem",
    marginBottom: "3rem"}}>Hamro News - Top {capitalizeFirstLetter(props.catagory)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={ <Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {
                                articles.map((element, index) => {
                                    return (<div className="col-md-4" key={index}>
                                        <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>);
                                }
                                )
                            }
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page == 1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>

                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

            </>
        )
}
News.defaultProps = {
    country: 'us',
    pageSize: 8,
    catagory: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catagory: PropTypes.string

}
export default News
