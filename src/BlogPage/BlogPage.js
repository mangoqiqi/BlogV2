import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import marked from 'marked';
import axios from 'axios';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const BlogHeader = ({year, headerTitle}) => (
    <nav className={`breadcrumb is-medium`}> 
        <ul> 
            <li><Link to={`/blog/2018`}><span className={`blog-link`}>{`Blogs`}</span></Link></li> 
            <li><Link to={`/blog/${year}`}><span className={`blog-link`}>{year}</span></Link></li> 
            <li className={`is-active`}> <Link to={`#`}><span className={`blog-link`}>{headerTitle}</span></Link></li> 
        </ul>
    </nav>
);

const BlogContent = ({title, content}) => {
    var markdown = marked(content, {
        gfm: true,
        tables: true,
        breaks: true,
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
          },
    });
    console.log(content);
    return (
        <div className={`content is-medium is-blog`}>
            <h1 className={`title is-spaced`}>{title}</h1>
            <div className={`section-body`}>
                <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
            </div>
        </div>
    )
}

const BlogContainer = ({year, headerTitle, title, content}) => (
    <main className="app-content has-background">
        <section className={`section is-storyworlds has-background is-medium  special-container`}>
            <div className="container">
                <div className={`columns is-centered`}>
                    <div className={`column is-7-fullhd is-9-widescreen is-10-tablet`}>
                        <BlogHeader year={year} headerTitle={headerTitle} />
                        <BlogContent title={title} content={content} />
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default class BlogPage extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this._isMounted = true;
        this.state = {
            title: ``,
            content: ``
        };
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        document.title = " ❤️ Blog";
        this.node.scrollIntoView();
        const self = this;
        axios({
            method: 'get',
            url: `https://api.godzzzzz.club/api/detail/${this.props.match.params.tag}`,
            data: {}
        }).then(function (response) {
            console.log(response.data.detail.content);
            if (self._isMounted) {
                document.title = ` ❤️ ${response.data.detail.title}`;
                self.setState({
                    title: response.data.detail.title,
                    content: response.data.detail.content
                });
            }
        }).catch(function (error) {
            
        }).then(function () {
            
        });
    }
    

    render() {
        const {title, content} = this.state;
        return (
            <div ref={node => this.node = node} className={`app-container`}>
                <Header symbol={`❤️`} selectedIndex={1} />
                <BlogContainer year={`${this.props.match.params.index}`} headerTitle={`${this.props.match.params.tag}`} title={title} content={content} />
            </div>
        );
    }
}