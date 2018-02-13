import React, {Component} from 'react';
import './order.less'
import Header from '../../base/header/herder'
import Footer from '../../base/footer/footer'
import Left from '../../base/left/left'

class order extends Component {
    render() {
        return (
            <div className="className">
                <Header/>
                <Left/>
                <div className="">
                    
                </div>
                <Footer/>
            </div>
        );
    }
}

export default order;