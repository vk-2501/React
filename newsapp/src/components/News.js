import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:5,
    category:'general'
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
    document.title=`${this.props.category.charAt(0).toUpperCase()}${this.props.category.substring(1)}-NewsTime`;
  }

 async componentDidMount(){
      this.props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4f8e3b3754d4befa3783656205ca8b8&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading:true});
      let data= await fetch(url);
      this.props.setProgress(30);
      let parsedData= await data.json()
      this.props.setProgress(50);
      this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
      this.props.setProgress(100);
  }
  handleNextClick=async ()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4f8e3b3754d4befa3783656205ca8b8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json()
    

    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles,
      loading:false

    })
  }
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4f8e3b3754d4befa3783656205ca8b8&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json()
    this.setState({articles: this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
  };

  handlePreviousClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4f8e3b3754d4befa3783656205ca8b8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    let data= await fetch(url);
    this.setState({loading:true});
    let parsedData= await data.json()
    

    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
      loading:false

    })
    
  }

  render() {
    return (
      <div className="container my-3">
          <h2 className="text-center">NewsTime - Top Headlines </h2>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner/>}
         >
           
          <div className="row">
            { this.state.articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
              <Newsitem title={!element.title?element.title.slice(0,44):""} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
              </div>
            })}
         
         
          
         
          </div>
          </InfiniteScroll>
           {/* <div className="container d-flex justify-content-between" >
           <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
           <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           </div> */}
          
      </div>
    )
  }
}
