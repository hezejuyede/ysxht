import React, {Component} from 'react';
import img from '../../common/imgs/logoB.png';
import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Modal from '../../component/modal/modal'
import './indexLogin.css';
import '../../common/icon/iconfont.css';


class indexLogin extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
            userName: "",
            userPassword: "",
            unameHelp: "",
            upwdHelp: "",
            ModalMessage:"登录成功",
            showHideModal:false
        }
    }

    render() {
        return (
            <div className="indexLogin">
                <Modal
                    ModalMessage={this.state.ModalMessage}
                    showHideModal={this.state.showHideModal} />
                <header className="indexLogin-logo">
                    <img src={img}/>
                </header>
                <main>
                    <section>
                        <h1 className="indexLogin-title">
                            亿成优生鲜后台管理系统
                        </h1>
                    </section>
                    <section className="Login-w">
                        <div className="Login-n">
                            <label>
                                <i className="iconfont icon-iconfonticonfontwode1"></i>
                                <input type="text"
                                       name="username"
                                       id="uname"
                                       ref="uname"
                                       onChange={this.changeUsername.bind(this)}
                                       placeholder="请输入用户名"/>
                                <p className="help-block">{this.state.unameHelp}</p>
                            </label>
                            <label>
                                <i className="iconfont icon-mima"></i>
                                <input type="password"
                                       name="password"
                                       id="upwd"
                                       ref="upwd"
                                       onChange={this.changePassword.bind(this)}
                                       placeholder="请输入密码"/>
                                <p className="help-block">{this.state.upwdHelp}</p>
                            </label>
                            <button onClick={this.admLogin.bind(this)}>登录</button>
                        </div>
                    </section>
                </main>
                <footer>
                    @版权归七七网络科技股份有限公司所有
                </footer>
            </div>
        )
    }

    componentDidMount() {
    };

//监听input中的数据，保存到state中
    changeUsername(e) {
        let uname = e.target.value;
        this.setState({
            userName: uname
        });
        this.setState({
            //清除help-block提示文字
            unameHelp: "",
        });
    };

    changePassword(e) {
        let upwd = e.target.value;
        this.setState({
            userPassword: upwd
        });
        this.setState({
            //清除help-block提示文字
            upwdHelp: ""
        });
    };

    admLogin(e) {
        if (this.state.userName === "" || this.state.userName === null) {
            this.setState({
                unameHelp: "* 用户名不能为空"
            })
        }
        else if (this.state.userPassword === "" || this.state.userPassword === null) {
            this.setState({
                upwdHelp: "* 密码不能为空"
            })
        }
        else if (this.state.userPassword !== "" && this.state.userName !== "") {
            axios.post("/admLogin", {
                username: this.state.userName,
                password: this.state.userPassword,
            }).then((res) => {
                if (res.data.login == 1) {
                    let userInfo = {
                        username: res.data.username,
                        useravatar: res.data.useravatar
                    };
                    let UserState = res.data.login;
                    userInfo = JSON.stringify(userInfo);
                    UserState = JSON.stringify(UserState);
                    localStorage.setItem("userInfos", userInfo);
                    localStorage.setItem("UserStates", UserState);
                    this.setState({
                        showHideModal: true
                    });
                    console.log(this.state.showHideModal)

                    /*window.location = "/home";*/


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

export default indexLogin


