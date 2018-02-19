import React, {Component} from 'react';
import axios from 'axios';
import './login.less'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import Sub from '..//Sub/usb'

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                'id': '1',
                'title': '123',
                'time': '2017',
                'person': 'cheny0815',
                'type': 'type',
                'operation': 'operation'
            }, {
                'id': '2',
                'title': '456',
                'time': '2017',
                'person': 'cheny0815',
                'type': 'type',
                'operation': 'operation'
            }, {
                'id': '3',
                'title': '789',
                'time': '2017',
                'person': 'cheny0815',
                'type': 'type',
                'operation': 'operation'
            }]
        }
    }
    render() {
        let admStae = this.admStae;
        return (
            <div className="className">
                <Header state={admStae}/>
                <Left/>
                <Sub title = "今年过节不收礼"/>
                <div className="ysx-login">
                    <div className="ysx-login-div">
                        <div className="ysx-login-input">
                            <i className="iconfont icon-yonghu"></i>
                            <input type="text" id="username" placeholder='用户名'/>
                        </div>
                        <div className="ysx-login-input">
                            <i className="iconfont icon-mima1"></i>
                            <input type="password" id="password" placeholder="密码"/>
                        </div>
                        <button onClick={admLogin}>确认登录</button>
                    </div>

                </div>
                <Footer/>
            </div>
        );

        function admLogin() {
            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
            axios.post("/admLogin", {
                username: username,
                password: password,
            }).then((res) => {
                if (res.data.login == 1) {
                    alert("登录成功");
                    admStae ="admLogin";
                    console.log(admStae)

                    /*window.location = "/"*/
                } else if (res.data == -1) {

                    alert("密码错误")
                } else if (res.data == 2) {
                    alert("该用户未注册")
                }

            }).catch((err) => {
                console.log(err)
            })
        }


    }

}

export default login;
