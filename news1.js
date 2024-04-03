// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'


// export class News extends Component {
//     static defaultProps = {
//         country: 'us',
//         pageSize: 8,
//         catagory: "general"
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         catagory: PropTypes.string

//     }
//      capitalizeFirstLetter=(string)=>{
//         return string.charAt(0).toUpperCase()+string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         console.log("Hello I am a constructor");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//         }
//         document.title=`${this.capitalizeFirstLetter(this.props.catagory)} - Hamro News`
//     }

//     async updateNews() {
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=779b0ea1e28042fd98f8a241c43c8f4a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         let parsedata = await data.json();
//         this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false })
//     }
//     async componentDidMount() {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=779b0ea1e28042fd98f8a241c43c8f4a&page=1&pageSize=${this.props.pageSize}`;
//         // this.setState({loading: true})
//         // let data = await fetch(url);
//         // let parsedata = await data.json();
//         // this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults,loading: false })
//         this.updateNews();
//     }


//     handlePreviousClick = async () => {

//         //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=779b0ea1e28042fd98f8a241c43c8f4a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         //     this.setState({loading: true})
//         //     let data = await fetch(url);
//         //     let parsedata = await data.json();
//         //     this.setState({
//         //         articles: parsedata.articles,
//         //         page: this.state.page - 1,
//         //         loading: false
//         // })
//         this.setState({
//             page: this.state.page - 1
//         })
//         this.updateNews();
//     }


//     handleNextClick = async () => {
//         // console.log("Previous")
//         // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

//         // }
//         // else {
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=779b0ea1e28042fd98f8a241c43c8f4a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         //    this.setState({loading: true})
//         //     let data = await fetch(url);
//         //     let parsedata = await data.json();
//         //     this.setState({
//         //         articles: parsedata.articles,
//         //         page: this.state.page + 1,
//         //         loading: false
//         //     })
//         // }
//         this.setState({
//             page: this.state.page + 1
//         })
//         this.updateNews();

//     }
//     render() {

//         return (
//             <div className='container my-3 '>
//                 <h1 className=" text-center my-5">Hamro News - Top {this.capitalizeFirstLetter(this.props.catagory)} Headlines</h1>
//                 {/* {this.state.loading && <Spinner />} */}
//                 <div className="row">
//                     {
//                         !this.state.loading && this.state.articles.map((element) => {
//                             return (<div className="col-md-4" key={element.url}>
//                                 <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "unknown" : element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>);
//                         }
//                         )
//                     }
//                 </div>
//                 <div className="container d-flex justify-content-between">
//                     <button type="button" disabled={this.state.page == 1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>

//                     <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>

//             </div>
//         )
//     }
// }

// export default News
