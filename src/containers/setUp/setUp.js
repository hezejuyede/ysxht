import React, {Component} from 'react';
import './setUp.css'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
import NoLogin from '../../component/Nologin/Nologin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'

class setUp extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            userinfoState: false,
            leftState: this.props.iconState.iconState.iconState
        }
    }
    render() {
        return (
            this.state.userinfoState ?
                <div className="setUp">
                    <Header/>
                    <Left/>
                    <div className={this.state.leftState ? "rightMove" : "ysx-setUp"}>
                        <div className="ysx-setUp-big">
                            <div className="ysx-setUp-div">
                                <div className="div-input">
                                    <div className="div-input-left">
                                        <i className="iconfont icon-iconfonticonfontwode1"></i>
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
                                        <i className="iconfont icon-shouji1"></i>
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
                    </div>
                    <Footer/>
                </div>
                : <NoLogin/>

        );
    }
    componentDidMount() {
        this._getRegister();

    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            leftState: nextProps.iconState.iconState.iconState,
        });
    }
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


function mapStateToProps(state) {

    return {
        iconState: state
    }

}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(setUp)