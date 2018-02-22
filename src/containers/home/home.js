import React, {Component} from 'react';
import './home.less'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'
class home extends Component {
    render() {

        return (
            <div className="">
                <Header/>
                <Left/>
                <div className="content-home">
                    <h2 className="home-top">首页</h2>
                    <div className="home-bottom">
                        <div className="home-bottom-user">
                            <p className="">5147</p>
                            <p className="">
                                <i className="iconfont icon-yonghu1"></i>
                                <span>用户总数</span>
                            </p>
                        </div>
                        <div className="home-bottom-product">
                            <p className="">199</p>
                            <p className="">
                                <i className="iconfont icon-shangpin1"></i>
                                <span>商品总数</span>
                            </p>
                        </div>
                        <div className="home-bottom-order">
                            <p className="">5226</p>
                            <p className="">
                                <i className="iconfont icon-dingdan-copy"></i>
                                <span>订单总数</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default home;
