import React, {Component} from 'react';
import './message.less'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

class Message extends Component {
    render() {
        return (
            <div className="className">
                <Header/>
                <Left/>
                <div className="ysx-message">
                    <div className="sttz" onClick={this.showSttz.bind(this)}>
                        <div className="sttz-top">
                            <div className="sttz-top-left">
                                <i className="iconfont icon-xiaoxi2"></i>
                            </div>
                            <div className="sttz-top-center">
                                <p className="">系统通知</p>
                                <p className="">无未读信息</p>
                            </div>
                            <div className="sttz-top-right">
                                <i  className="iconfont icon-right-trangle mone1"></i>
                                <i  className="iconfont icon-down-trangle1 mone2"></i>
                            </div>
                        </div>
                        <div className="sttz-bottom mone">
                            <p className="">无未读信息</p>
                        </div>
                    </div>
                    <div className="xtxx" onClick={this.showXtxx.bind(this)}>
                        <div className="sttz-top">
                            <div className="sttz-top-left">
                                <i className="iconfont icon-tuiguang"></i>
                            </div>
                            <div className="sttz-top-center">
                                <p className="">系统通知</p>
                                <p className="">无未读信息</p>
                            </div>
                            <div className="sttz-top-right">
                                <i className="iconfont icon-right-trangle mtwo1"></i>
                                <i className="iconfont icon-down-trangle1 mtwo2"></i>
                            </div>
                        </div>
                        <div className="sttz-bottom mtwo">
                            <p className="">无未读信息</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
    showSttz(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        let bottom = document.querySelector('.mone');
        let right = document.querySelector('.mone1 ');
        let down = document.querySelector('.mone2');
        if (bottom.style.display == "block") {
            bottom.style.display = "none";
            down.style.display = 'block';
            right.style.display = 'none';
        } else {
            bottom.style.display = "block";
            down.style.display = 'none';
            right.style.display = 'block';
        }


    }

    showXtxx(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        let bottom = document.querySelector('.mtwo');
        let right = document.querySelector('.mtwo1 ');
        let down = document.querySelector('.mtwo2');
        if (bottom.style.display == "block") {
            bottom.style.display = "none";
            down.style.display = 'block';
            right.style.display = 'none';
        } else {
            bottom.style.display = "block";
            down.style.display = 'none';
            right.style.display = 'block';
        }
    }
}

export default Message;