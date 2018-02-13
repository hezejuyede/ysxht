import React, {Component} from 'react';
import './register.less'
import Header from '../../base/header/herder'
import Footer from '../../base/footer/footer'
import Left from '../../base/left/left'
import ReactDOM from 'react-dom';
class register extends Component {
    render() {

        return (
            <div className="">
                <Header/>
                <Left/>
                <div className="ysx-register">
                    <div className="ysx-register-div">
                        <div className="ysx-register-input">
                            <i className="iconfont icon-yonghu"></i>
                            <input type="text" placeholder='用户名'/>
                        </div>
                        <div className="ysx-register-input">
                            <i className="iconfont icon-mima1"></i>
                            <input type="text" placeholder="密码"/>
                        </div>
                        <div className="ysx-register-input">
                            <i className="iconfont icon-mima1"></i>
                            <input type="text" placeholder="确认密码"/>
                        </div>
                        <div className="ysx-register-input">
                            <i className="iconfont icon-phone"></i>
                            <input type="text" placeholder="手机号"/>
                        </div>
                        <button type="buttom">确认注册</button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default register;
