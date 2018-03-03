import React, {Component} from 'react';
import axios from 'axios'
import './register.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class register extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            userinfoState: false
        }
    }

    render() {
        return (

            this.state.userinfoState ? <div className="">
                <Header/>
                <Left/>
                <div className="ysx-register">
                    <div className="ysx-register-div">
                        <div className="ysx-register-input">
                            <i className="iconfont icon-yonghu"></i>
                            <input type="text" id="username1" placeholder='用户名'/>
                        </div>
                        <div className="ysx-register-input">
                            <i className="iconfont icon-mima1"></i>
                            <input type="password" id="password1" placeholder="密码"/>
                        </div>
                        <div className="ysx-register-input">
                            <i className="iconfont icon-mima1"></i>
                            <input type="password" id="password2" placeholder="确认密码"/>
                        </div>
                        <div className="ysx-register-input">
                            <i className="iconfont icon-phone"></i>
                            <input type="text" id="phoneNumber" placeholder="手机号"/>
                        </div>
                        <button onClick={admRegister}>确认注册</button>
                    </div>
                </div>
                <Footer/>
            </div> : <NoLogin/>
        );

        function admRegister() {
            const username1 = document.querySelector("#username1").value;
            const password1 = document.querySelector("#password1").value;
            const password2 = document.querySelector("#password2").value;
            const phoneNumber = document.querySelector("#phoneNumber").value;
            if (password1 === password2) {
                axios.post("/admRegester", {
                    username1: username1,
                    password1: password1,
                    password2: password2,
                    phoneNumber: phoneNumber
                }).then((res) => {

                    if (res.data == -2) {
                        alert("服务器错误")
                    } else if (res.data == 2) {
                        alert("用户已经注册")
                    } else if (res.data == -1) {
                        alert("注册失败")
                    } else if (res.data == 1) {
                        alert("注册成功")
                    }

                }).catch((err) => {
                    console.log(err)
                })


            } else {
                alert("两次密码输入不一样")
            }

        }

    }

    componentDidMount() {
        this._getRegister();

    };

    _getRegister() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        if (NowUserStates == null) {
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates == 1) {
            this.setState({
                userinfoState: true,
            })

        }
    };
}

export default register;
