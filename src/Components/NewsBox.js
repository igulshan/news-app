import React, { Component } from 'react';
import NewsItem from './NewsItem';
import LoadingGif from './LoadingGif';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';


export default class NewsBox extends Component {
    constructor() {
        super();
        this.state = {
            newsList: [],
            loading: false,
            page: 1,
            totalResults: 0,
            progress : 20

        }
    }
    async componentDidMount() {
        this.GetData();
        document.title = "Monkey News-" + this.props.category;

    }

    GetData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8366ef62cbe24d458f22d4e09559c666&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({
            loading: true,
            progress:40
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            newsList: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            progress:100
        })
    }

    fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8366ef62cbe24d458f22d4e09559c666&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
        this.setState({
            page: this.state.page + 1
        })
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            newsList: this.state.newsList.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }

    LoadNextPage = async () => {
        this.setState({
            page: this.state.page + 1,
        })
        this.GetData();
    }

    LoadPrevPage = async () => {
        this.setState({
            page: this.state.page - 1,
        })
        this.GetData();
    }


    render() {


        return (
            <>
                <LoadingBar color='#f11946'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:0})} />
                <h2 className='text-center my-8' style={{marginTop:'100px'}}>Todays {this.props.category} News</h2>
                <div className='d-flex justify-content-between my-3'>
                    <button disabled={this.state.page <= 1} type="button" onClick={this.LoadPrevPage} className="btn btn-sm btn-dark mx-3">&larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.LoadNextPage} className="btn btn-sm btn-dark mx-3">Next &rarr;</button>
                </div>
                <InfiniteScroll
                    dataLength={this.state.newsList.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.totalResults > this.state.newsList.length}
                    loader={<LoadingGif className='my-3' />}
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.newsList.map((element) => {
                                return <div className='col-md-4'>
                                    <NewsItem title={element.title} details={element.description} image={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}