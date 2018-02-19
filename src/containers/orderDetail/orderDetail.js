import React, {Component} from 'react';
import './orderDetails.less'
import axios from 'axios';
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'


class orderDetail extends Component {
    render() {
        return (
            <div className="ysx-orderDetail">
                <Header/>
                <Left/>
                <div className="myOrderDetail">
                    <div className="myOrderDetail-top">
                        订单详情
                    </div>
                    <div className="myOrderDetail-bottom">
                        <div className="myOrderDetail-bottom-div">
                            <div className="">订单号:</div>
                            <div className="">12345678909</div>
                        </div>
                        <div className="myOrderDetail-bottom-div">
                            <div className="">创建时间:</div>
                            <div className="">2018-02-14,08:08:08</div>
                        </div>
                        <div className="myOrderDetail-bottom-div">
                            <div className="">收件人:</div>
                            <div className="">
                                <span>七七</span>
                                <span>15550739985</span>
                            </div>
                        </div>
                        <div className="myOrderDetail-bottom-div">
                            <div className="">地址:</div>
                            <div className="">
                                山东省菏泽市巨野县永丰街道办事处健康路77号
                            </div>
                        </div>
                        <div className="myOrderDetail-bottom-div">
                            <div className="">订单状态:</div>
                            <div className="">
                                <span>已付款</span>
                                <button type="button">点击发货</button>
                            </div>
                        </div>
                        <div className="myOrderDetail-bottom-div">
                            <div className="">支付方式:</div>
                            <div className="">在线支付</div>
                        </div>
                        <div className="myOrderDetail-bottom-div">
                            <div className="">支付金额:</div>
                            <div className="">￥199</div>
                        </div>

                    </div>
                    <div className="OrderDetail-div">
                        <div className="OrderDetail-div-top">订单详情:</div>
                        <div className="OrderDetail-div-bottom">
                            <div className="OrderDetail-div-bottom-top">
                                <div className="goods-img">图片</div>
                                <div className="goods-infos">信息</div>
                                <div className="goods-price">单价</div>
                                <div className="goods-number">数量</div>
                                <div className="goods-hj">合计</div>
                            </div>
                        </div>
                        <div className="OrderDetail-div-template">
                            <div className="OrderDetail-template-img">
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg" alt=""/>
                            </div>
                            <div className="OrderDetail-template-title">
                                亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹
                            </div>
                            <div className="OrderDetail-template-price">
                                ￥199
                            </div>
                            <div className="OrderDetail-template-number">
                                1
                            </div>
                            <div className="OrderDetail-template-zj">
                                199
                            </div>
                        </div>
                        <div className="OrderDetail-div-template">
                            <div className="OrderDetail-template-img">
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg" alt=""/>
                            </div>
                            <div className="OrderDetail-template-title">
                                亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹
                            </div>
                            <div className="OrderDetail-template-price">
                                ￥199
                            </div>
                            <div className="OrderDetail-template-number">
                                1
                            </div>
                            <div className="OrderDetail-template-zj">
                                199
                            </div>
                        </div>
                        <div className="OrderDetail-div-template">
                            <div className="OrderDetail-template-img">
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg" alt=""/>
                            </div>
                            <div className="OrderDetail-template-title">
                                亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹
                            </div>
                            <div className="OrderDetail-template-price">
                                ￥199
                            </div>
                            <div className="OrderDetail-template-number">
                                1
                            </div>
                            <div className="OrderDetail-template-zj">
                                199
                            </div>
                        </div>
                        <div className="OrderDetail-div-template">
                            <div className="OrderDetail-template-img">
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg" alt=""/>
                            </div>
                            <div className="OrderDetail-template-title">
                                亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹
                            </div>
                            <div className="OrderDetail-template-price">
                                ￥199
                            </div>
                            <div className="OrderDetail-template-number">
                                1
                            </div>
                            <div className="OrderDetail-template-zj">
                                199
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
    componentDidMount() {
        axios.get('/hot').then(res => {
            console.log(res);
        })
    }
}

export default orderDetail;