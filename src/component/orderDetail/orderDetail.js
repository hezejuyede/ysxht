import React, {Component} from 'react';
import './orderDetails.less'
import Header from '../../base/header/herder'
import Footer from '../../base/footer/footer'
import Left from '../../base/left/left'

class orderDetail extends Component {
    render() {
        return (
            <div className="ysx-orderDetail">
                <Header/>
                <Left/>
                <div className="myOrderDetail">
                    <div className="myOrderDetail-top"></div>
                    <div className="myOrderDetail-bottom"></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default orderDetail;