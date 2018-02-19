import React from "react";
import logo from '../../common/imgs/logo.png'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './header.less'

const herder = (props) => {
    return (
        <AdmLogin state = {props}/>
    );

    function NoLogin() {
        return <div className="herder">
            <div className="herder-left">
                <img src={logo} alt=""/>
            </div>
            <div className="herder-right">
                <div className="home">
                    <NavLink exact to="/home">
                        <i className="iconfont icon-zhuye"></i>
                        <span>主页</span>
                    </NavLink>
                </div>
                <div className="register">
                    <NavLink to="/register">
                        <i className="iconfont icon-iconfonticonfontwode1"></i>
                        <span>注册</span>
                    </NavLink>
                </div>
                <div className="login">
                    <NavLink to="/login">
                        <i className="iconfont icon-denglu"></i>
                        <span>登录</span>
                    </NavLink>
                </div>
                {/*<div className="set">
                        <NavLink to="/setUP">
                            <i className="iconfont icon-shezhi"></i>
                            <span>设置</span>
                        </NavLink>
                    </div>
                    <div className="message">
                        <NavLink to="/Message">
                            <i className="iconfont icon-xiaoxi2"></i>
                            <span>消息</span>
                        </NavLink>
                    </div>*/}
            </div>
        </div>
    }

    function Login() {
        return <div className="herder">
            <div className="herder-left">
                <img src={logo} alt=""/>
            </div>
            <div className="herder-right">
                <div className="home">
                    <NavLink exact to="/home">
                        <i className="iconfont icon-zhuye"></i>
                        <span>主页</span>
                    </NavLink>
                </div>
                <div className="register">
                    <div className="">
                        欢迎：
                    </div>
                </div>
                <div className="set">
                    <NavLink to="/setUP">
                        <i className="iconfont icon-shezhi"></i>
                        <span>设置</span>
                    </NavLink>
                </div>
                <div className="message">
                    <NavLink to="/Message">
                        <i className="iconfont icon-xiaoxi2"></i>
                        <span>消息</span>
                    </NavLink>
                </div>
            </div>
        </div>
    }

    function AdmLogin(props) {
        const state = props.state;
        console.log(props.state);
        if (props.state === 'admsStae') {
            return <Login/>
        } else {
            return <NoLogin/>
        }
    }
}

export default herder;