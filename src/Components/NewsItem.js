import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let {title , details , image , url , author ,time} = this.props;
        return (
            <div className='my-3 mx-3'>
                <div className="card" >
                    <img src={!image? "https://www.coindesk.com/resizer/xSmGNq_GXoi78R6sE3GsKTEv2FI=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/THI6RJU2YRHFPHLGERM4X2KHPA.jpg":image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{details}</p>
                            <p class="card-text"><small class="text-body-secondary">{!author?"Unknown": author}{new Date(time).toGMTString()}</small></p>
                            <a href={url} className="btn btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}