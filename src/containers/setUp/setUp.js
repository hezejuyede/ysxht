import React, {Component} from 'react';
import './setUp.less'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

class setUp extends Component {
    render() {
        return (
            <div className="className">
                <Header/>
                <Left/>
                <div className="ysx-setUp">
                    <div className="ysx-setUp-div">
                        <div className="div-input">
                            <div className="div-input-left">
                                <i className="iconfont icon-huiyuan"></i>
                            </div>
                            <div className="div-input-center">
                                <input type="text" placeholder="昵称"/>
                            </div>
                            <div className="div-input-right">
                                <span>修改</span>
                            </div>
                        </div>
                        <div className="div-input">
                            <div className="div-input-left">
                                <i className="iconfont icon-phone"></i>
                            </div>
                            <div className="div-input-center">
                                <input type="text" placeholder="手机号"/>
                            </div>
                            <div className="div-input-right">
                                <span>修改</span>
                            </div>
                        </div>
                    </div>
                    <div className="changePassword">
                        <h2>修改密码</h2>
                        <div className="div-input">
                            <div className="div-input-left">
                                <i className="iconfont icon-mima"></i>
                            </div>
                            <div className="div-input-center">
                                <input type="text" placeholder="输入新密码"/>
                            </div>
                        </div>
                        <div className="div-input">
                            <div className="div-input-left">
                                <i className="iconfont icon-mima"></i>
                            </div>
                            <div className="div-input-center">
                                <input type="text" placeholder="确认密码"/>
                            </div>
                        </div>
                        <div className="changePassword-div">
                            <button>点击修改</button>
                        </div>

                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default setUp;