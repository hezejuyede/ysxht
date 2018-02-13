import React, {Component} from 'react';
import './login.less'
import Header from '../../base/header/herder'
import Footer from '../../base/footer/footer'
import Left from '../../base/left/left'

class login extends Component {
    render() {
        return (
            <div className="className">
                <Header/>
                <Left/>
                <div className="ysx-login">
                    <div className="ysx-login-div">
                        <div className="ysx-login-input">
                            <i className="iconfont icon-yonghu"></i>
                            <input type="text" placeholder='用户名'/>
                        </div>
                        <div className="ysx-login-input">
                            <i className="iconfont icon-mima1"></i>
                            <input type="text" placeholder="密码"/>
                        </div>
                        <button type="buttom">确认登录</button>
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default login;
