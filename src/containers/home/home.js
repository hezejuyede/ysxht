import React, {Component} from 'react';
import './home.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'



class home extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            userinfoState:false,
            rightMove:true
        }
    }
    render() {
        return (
            this.state.userinfoState ?
                <div className="yc-home">
                    <Header/>
                    <Left/>
                    <div className="content-home" id="contentHome">
                        <h2 className="home-top" onClick={this.rightMove.bind(this)}>首页</h2>
                        <div className="home-bottom">
                            <div className="home-bottom-user">
                                <p className="">5147</p>
                                <p className="">
                                    <i className="iconfont icon-yonghu1"></i>
                                    <span>用户总数</span>
                                </p>
                            </div>
                            <div className="home-bottom-product">
                                <p className="">199</p>
                                <p className="">
                                    <i className="iconfont icon-shangpin1"></i>
                                    <span>商品总数</span>
                                </p>
                            </div>
                            <div className="home-bottom-order">
                                <p className="">5226</p>
                                <p className="">
                                    <i className="iconfont icon-dingdan-copy"></i>
                                    <span>订单总数</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                : <NoLogin/>

        );
    }
    componentWillMount() {
        this._getHome();
    };

    _getHome() {
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
    rightMove(){
        let right = document.querySelector("#contentHome");
        if (this.state.rightMove === true) {
            this.setState({
                rightMove: false
            });
            right.className = "rightMove";
        }
        else if (this.state.rightMove === false) {
            this.setState({
                rightMove: true
            });
            right.className = "content-home";
        }
    }
}

export default home;
