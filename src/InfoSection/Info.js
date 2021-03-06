import React, { Component } from 'react';
import messageImg from '../spaceX.jpg';

const Introduction = ({className = '', introduction}) => (
    <span className={(`shadow ${className}`).trim()}>{introduction}</span>
)

const Summary = ({blog_link}) => (
    <div className="column is-6">
        <div className="content hello">
            <h2>您好！</h2>
            <h4>我是显东(HinDung)。</h4>
            <p>我是一名
                <Introduction introduction={` `} />
                <Introduction className={`is-danger`} introduction={`程序员`} />、
                <Introduction className={`is-danger`} introduction={`Gopher`} />、
                <Introduction className={`is-danger`} introduction={`前端爱好者`} /> 和 
                <Introduction introduction={` `} />
                <Introduction className={`is-danger`} introduction={`开源代码白嫖怪`} />。
            </p>
            <p>我对
                <Introduction introduction={` `} />
                <Introduction className={`is-danger`} introduction={`Golang`} />、
                <Introduction className={`is-danger`} introduction={`React`} />、
                <Introduction className={`is-danger`} introduction={`Kubernetes`} /> 、 
                <Introduction className={`is-danger`} introduction={`Docker`} />、
                <Introduction className={`is-danger`} introduction={`容器云`} />和
                <Introduction className={`is-danger`} introduction={`云原生`} />感兴趣。
            </p>
            <p>
                这个【部落格】的目的是记录我工作中遇到的一些问题， <br />
                点击右上角的【部落格】，汲取我的知识😜。<br /><br />
                如果您想联系我，这里是我的邮箱:
                <a className={`is-danger`} href="mailto:tangtione@qq.com"> tangtione@qq.com</a>。
            </p>



            <h5>致谢：</h5>
            <p>
                部落格由前端和后端两部分组成，前端部分采用
                <a className={`is-danger`} href="https://react.docschina.org">React.js</a> 
                编写，后端采用<a className={`is-danger`} href="https://golang.google.cn">Golang</a>
                的
                <a className={`is-danger`} href="https://github.com/gin-gonic/gin">GIN</a>
                框架编写，两者皆为开源代码。而前端框架是基于
                <a className={`is-danger`} href="https://github.com/1ess">@1ess</a>同学开源的代码！代码目前托管在<a className={`is-danger`} href="https://github.com/1ess/BlogV2">Github</a>。
            </p>
        </div>
    </div>
)

const Picture = () => (
    <div className="column is-5 is-offset-1">
        <div id="messages" className="messages">
            <div className="message is-shown">
                <img className="message-img" src={messageImg} alt={``} />
            </div>
            <p className="beian"><span className ="emoji" role ="img" aria-label="heart">❤</span>My Conquest Is the Sea of Stars.<span className ="emoji" role ="img" aria-label="heart"></span>🚀🚀</p>
        </div>
    </div>
)

export default class Info extends Component {
    render() {
        const { blog_link } = this.props;
        return (
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <Summary blog_link={blog_link} />
                            <Picture />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}