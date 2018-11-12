import React, { Component, Fragment } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import '../App.css';
import '../Blog.css';

export default class Blog2019 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                
            ]
        }
    }
    render() {
        const {items} = this.state;
        return (
            <Fragment>
                {
                    items.map((item, index)=>(<BlogItem key={index} number={``+ (index + 1)} title={item.title} date_time={item.date_time} summary={item.summary} />))
                }
            </Fragment>
        );
    }
}

