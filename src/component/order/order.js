import React, {Component} from 'react';
import './order.less'
import Header from '../../base/header/herder'
import Footer from '../../base/footer/footer'
import Left from '../../base/left/left'

class order extends Component {
    render() {
        return (
            <div className="ysx-order">
                <Header/>
                <Left/>
                <div className="myOrder">
                    <div className="myOrder-title">
                        订单管理
                    </div>
                    <div className="myOrder-select">
                        <select>
                            <option value="orderNumber">按订单号</option>
                            <option value="noPay">未付款</option>
                            <option value="dfh">代发货</option>
                            <option value="wfh">已发货</option>
                            <option value="dtk">待退款</option>
                        </select>
                        <input placeholder="订单号"/>
                        <button type="button">查询</button>

                    </div>
                    <div className="myOrder-list">
                        <div className="myOrder-list-top">
                            <div className="myOrder-list-top-number">订单号</div>
                            <div className="myOrder-list-top-sjr">客户</div>
                            <div className="myOrder-list-top-state">状态</div>
                            <div className="myOrder-list-top-price">总价</div>
                            <div className="myOrder-list-top-time">时间</div>
                            <div className="myOrder-list-top-cz">操作</div>
                        </div>
                        <div className="myOrder-list-bottom">
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                            <div className="myOrder-list-template">
                                <div className="myOrder-list-template-number">
                                    15434567890
                                </div>
                                <div className="myOrder-list-template-sjr">七七</div>
                                <div className="myOrder-list-template-state">已支付</div>
                                <div className="myOrder-list-template-price">￥199</div>
                                <div className="myOrder-list-template-time">2018-1-21 08:08:08</div>
                                <div className="myOrder-list-template-cz">操作</div>
                            </div>
                        </div>

                    </div>
                    <div className="myOrder-page">
                        <div className="">
                            <i className="iconfont icon-left-trangle"></i>
                        </div>
                        <div id="page">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                        <div className="">...</div>
                        <div className="">188</div>
                        <div className="">
                            <i className="iconfont icon-right-trangle"></i>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default order;