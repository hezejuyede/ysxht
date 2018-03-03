import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import img from '../../common/imgs/logo.png'
import './header.css'
import '../../common/icon/iconfont.css'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as iconState from '../../redux/actions/actions'


class header extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            userName: Object,
            userAvatar: Object,
            icon: true,
            iconActions: Object
        }
    }

    render() {
        const userName = this.state.userName;
        const userAvatar = this.state.userAvatar;
        const close= "iconfont icon-liebiao";
        const open = "iconfont icon-liebiao-copy";
        return (
            <div className="header">
                <div className="header-left">
                    <img src={img}/>
                </div>
                <div className="header-center">
                    <div className="openCloseLeft">
                        <i onClick={this.openCloseLeft.bind(this)}
                           className={this.state.icon ? close : open}></i>
                    </div>
                    <div className="home">
                        <NavLink exact to="/home">
                            <i className="iconfont icon-zhuye1"></i>
                        </NavLink>
                    </div>
                    <div className="set">
                        <NavLink to="/Register">
                            <i className="iconfont icon-icon-copy"></i>
                        </NavLink>
                    </div>
                    <div className="set">
                        <NavLink to="/setUP">
                            <i className="iconfont icon-shezhi"></i>
                        </NavLink>
                    </div>
                    <div className="message">
                        <NavLink to="/Message">
                            <i className="iconfont icon-lingdang"></i>
                        </NavLink>
                    </div>
                    <div className="MLogOut" onClick={this.UserOut.bind(this)}>
                        退出
                    </div>
                </div>
                <div className="header-right">
                    <div className="userInfo-avatar">
                        <img src={userAvatar}/>
                    </div>
                    <div className="userInfo-name">
                        <p >{userName}</p>
                        <p onClick={this.UserOut.bind(this)}>退出</p>
                    </div>
                </div>
            </div>
        )

    }

    componentWillMount() {
        this._getHeader();
    };

    _getHeader() {
        let NowUserInfos = localStorage.getItem("userInfos");
        NowUserInfos = JSON.parse(NowUserInfos);
        this.setState({
                userName: NowUserInfos.username,
                userAvatar: NowUserInfos.useravatar
            }
        )
    };

    openCloseLeft() {
        if (this.state.icon === true) {

            this.setState({
                icon: false

            });
        }
        else if (this.state.icon === false) {

            this.setState({
                icon: true
            });
        }
    }

    UserOut() {
        localStorage.clear();
        window.location.reload();
    }

}

// -------------------redux react 绑定--------------------

//数据绑定，建立一个从外部state到UI组件props的映射，参数是state，简单返回你关心的几个值。
function mapStateToProps(state) {
    console.log(state.iconState);

    return {
        text: state.iconState
    }

}

//事件绑定，定义UI组件的参数到dispatch方法的映射

function mapDispatchToProps(dispatch) {
    return {
        //通过dispatch将action包裹起来，这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）子组件未察觉redux的情况下，将dispatch传递给子组件。
        iconActions: bindActionCreators(iconState, dispatch),

    }
}

//connect: 连接容器组件和UI组件，接受两个参数（数据绑定mapStateToProps和事件绑定mapDispatchToProps），再接受一个参数（将要绑定的组件本身）：
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(header)

