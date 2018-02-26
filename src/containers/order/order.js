import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './order.less'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

class order extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        const userOrder = this.state.data;

        return (
            <div className="ysx-order">
                <Header/>
                <Left/>
                <div className="myOrder" >
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
                            {userOrder.map((item, index) => {
                                return <div key={index}className="myOrder-list-template">
                                    <div className="myOrder-list-template-number">
                                        <NavLink to={'/orderDetails/'+item.orderNumber}>
                                            {item.orderNumber}
                                        </NavLink>
                                    </div>
                                    <div className="myOrder-list-template-sjr">{item.name}</div>
                                    <div className="myOrder-list-template-state">{item.orderState}</div>
                                    <div className="myOrder-list-template-price">{item.orderAmount}</div>
                                    <div className="myOrder-list-template-time">{item.orderTime}</div>
                                    <div className="myOrder-list-template-cz">
                                        <NavLink to={'/orderDetails/'+item.orderNumber}>操作</NavLink>
                                    </div>
                                </div>
                            })}
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
                </div>
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        this._getUserOrder();

    };

    _getUserOrder() {
        axios.get("/admUserOrder")
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    };

}

export default order;