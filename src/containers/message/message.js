import React, {Component} from 'react';
import './message.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class Message extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            userinfoState: false
        }
    }

    render() {
        return (

            this.state.userinfoState ? <div className="className">
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
                                <i className="iconfont icon-right-trangle mone1"></i>
                                <i className="iconfont icon-down-trangle1 mone2"></i>
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
            </div> : <NoLogin/>
        );
    }
    componentWillMount() {
        this._Message();
    };

    _Message() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);

        if (NowUserStates == null) {
            console.log(this.state.userinfoState);
            this.setState({
                userinfoState: false,
            })
        } else if (NowUserStates == 1) {
            this.setState({
                userinfoState: true
            })
        }

    };

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


    };

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
    };
}

export default Message;