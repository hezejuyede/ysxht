import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './left.css'
import '../../common/icon/iconfont.css'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import index from "../../redux/reducres/index";


class left extends Component {
    //context可以跨组件传递数据
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            leftState: this.context.iconState,
            leftState1: false,
            leftTemplateBottom:true,
            leftList:true

        }
    }

    render() {

        return (
            <div className="left">
                <div className="top" onClick={this.showHideLeft.bind(this)}>
                    哈哈哈哈
                </div>
                <div id="left" className="left-hide">
                    <div className="left-template" onClick={this.showDownList.bind(this)}>
                        <div className="left-template-top">
                            <i className="iconfont icon-dingdan1"></i>
                            <span>订单模块</span>
                            <i className="iconfont icon-right-trangle"></i>
                            <i className="iconfont icon-down-trangle1"></i>
                        </div>
                        <div className="left-template-bottom bsh">
                        <NavLink to="/order">订单管理</NavLink>
                    </div>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top" onClick={this.showDownList.bind(this)}>
                            <i className="iconfont icon-shangpin-"></i>
                            <span>商品模块</span>
                            <i className="iconfont icon-right-trangle two1"></i>
                            <i className="iconfont icon-down-trangle1 two2"></i>
                        </div>
                        <div className="left-template-bottom bsh">
                            <NavLink to="/productAll">商品管理</NavLink>
                            <NavLink to="/classify">品类管理</NavLink>
                        </div>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top" onClick={this.showDownList.bind(this)}>
                            <i className="iconfont icon-drxx10"></i>
                            <span>用户模块</span>
                            <i className="iconfont icon-right-trangle three1"></i>
                            <i className="iconfont icon-down-trangle1 three2"></i>
                        </div>
                        <div className="left-template-bottom bsh">
                            <NavLink to="/userInfos">
                                用户列表
                            </NavLink>
                        </div>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top" onClick={this.showDownList.bind(this)}>
                            <i className="iconfont icon-diannao"></i>
                            <span>PC端模块</span>
                            <i className="iconfont icon-right-trangle three1"></i>
                            <i className="iconfont icon-down-trangle1 three2"></i>
                        </div>
                        <div className="left-template-bottom bsh">
                            <NavLink to="/userInfos">
                                页面信息
                            </NavLink>
                        </div>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top" onClick={this.showDownList.bind(this)}>
                            <i className="iconfont icon-shouji"></i>
                            <span>移动模块</span>
                            <i className="iconfont icon-right-trangle three1"></i>
                            <i className="iconfont icon-down-trangle1 three2"></i>
                        </div>
                        <div className="left-template-bottom bsh">
                            <NavLink to="/userInfos">
                                页面信息
                            </NavLink>

                        </div>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top" onClick={this.showDownList.bind(this)}>
                            <i className="iconfont icon-weixin1"></i>
                            <span>微信模块</span>
                            <i className="iconfont icon-right-trangle three1"></i>
                            <i className="iconfont icon-down-trangle1 three2"></i>
                        </div>
                        <div className="left-template-bottom bsh">
                            <NavLink to="/userInfos">
                                页面信息
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    componentWillMount() {};
    componentDidMount() {
        console.log(this.state.leftState)
    }

    showHideLeft() {
        let left = document.querySelector("#left");
        let a = left.getElementsByTagName("a");

        if (this.state.leftState1 === true) {
            this.setState({
                leftState1: false

            });
            left.className = "left-hide";

        }
        else if (this.state.leftState1 === false) {
            this.setState({
                leftState1: true

            });

            left.className = "left-show";
        }
    }

    showDownList(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        const topList = document.getElementsByClassName("left-template-top");
        const bottomList = document.getElementsByClassName("bsh");
        const right = document.getElementsByClassName("icon-right-trangle");
        const down = document.getElementsByClassName("icon-down-trangle1");
        if (this.state.leftList === true) {
            this.setState({
                leftList: false

            });
            for (let i = 0; i < topList.length; i++) {
                (function (n) {
                    topList[i].onclick = function () {
                        bottomList[n].className = "left-template-bottom-hide bsh";
                        right[n].style.display = "block";
                        down[n].style.display = "none";
                    }
                })(i)

            }
        }
        else if (this.state.leftList === false) {
            this.setState({
                leftList: true

            });
            for (let i = 0; i < topList.length; i++) {
                (function (n) {
                    topList[i].onclick = function () {
                        bottomList[n].className = "left-template-bottom bsh";
                        right[n].style.display = "none";
                        down[n].style.display = "block";
                    }
                })(i)
            }
        }
    }
}

export default left;
