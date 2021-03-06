import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../App.css';
import '../Blog.css';

export default class YearIndex extends Component {

    componentDidMount = () => {
        document.title =  `${this.props.year}`;
    }
    

    handleClick = e => {
        const {handleYearClick, currentYear} = this.props;
        const year = e.target.text;
        document.title =  `${year}`;
        if (currentYear === year) {
            return;
        }
        handleYearClick({
            value: 0,
            year
        });
    }

    handleClickKind = e => {
        const {handleKindClick, currentYear} = this.props;
        const kind = e.target.text;
        document.title =  `${kind}`;
        if (currentYear === kind) {
            return;
        }
        handleKindClick({
            value: 0,
            kind
        });
    }

    generateYearList = length => {
        return Array.from({ length: length }, (v, i) => `${i + 2020}`);
    }

    render() {
        const {year} = this.props;
        
        const currentYear = new Date().getFullYear();
        const i = currentYear - 2019;
        const list = this.generateYearList(i);
        const label = new Array("Docker","Go","Gin", "Network", "Kubernetes", "Algorithm", "LeetCode");
        return (
            <div className="column is-3 is-2-widescreen" >
                <div className="menu">
                    <p className="menu-label"> 岁岁年年 </p>
                    <ul className="menu-list">
                        {list.map((item, index) =>{
                            return  <li key={index}>
                            <Link className={(`year_filter ` + (year === item ? `is-active` : ``)).trim()} onClick={this.handleClick} to={`/blog/` + item}>{item}</Link>
                            </li>
                        }) }
                    </ul>
                    <p className="menu-label"> 分分秒秒 </p>
                    <ul className="menu-list">
                        {label.map((item, index) =>{
                            return  <li key={index}>
                            <Link className={(`year_filter ` + (year === item ? `is-active` : ``)).trim()} onClick={this.handleClick} to={`/blog/` + item}>{item}</Link>
                            </li>
                        }) }
                    </ul>
                </div>
            </div>
        );
    }
}
