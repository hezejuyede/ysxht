import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './productAll.css'

import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import NoLogin from '../../component/Nologin/Nologin'

import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

class product extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            productALL: []
        }
    }

    render() {
        const productALL = this.state.productALL;
        return (

        this.state.userinfoState ? <div className="productAll">
            <Header/>
            <Left/>
            <div className="productAll-div">
                <div className="productAll-div-top">
                    <p className="productAll-div-top-left">商品品类</p>
                    <p className="productAll-div-top-right">添加品类</p>
                </div>
                <div className="serchProduct">
                    <div className="serchProduct-left">
                        <select>
                            <option value="id">id查询</option>
                            <option value="name">商品名查询</option>
                        </select>
                    </div>
                    <div className="serchProduct-right">
                        <input type="text" placeholder="关键字"/>
                        <button>搜索</button>
                    </div>
                </div>
                <div className="productAll-div-bottom">
                    {productALL.map((item, index) => {
                        return <NavLink to={'/product/'+item.id} key={index}>
                            <img src={item.img} alt=""/>
                            <span>{item.goodsName}</span>
                        </NavLink>
                    })}

                </div>
            </div>
            <Footer/>
        </div> : <NoLogin/>
        );
    }

    componentDidMount() {
        this._getProductAll();

    };

    _getProductAll() {
        let NowUserStates = localStorage.getItem("UserStates");
        NowUserStates = JSON.parse(NowUserStates);
        if (NowUserStates == null) {
            console.log(this.state.userinfoState);
            this.setState({
                userinfoState: false,
            })
        }
        else if (NowUserStates == 1) {
            axios.get("/admProductAll")
                .then((res) => {
                    this.setState({
                        productALL: res.data,
                        userinfoState: true
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    };
}

export default product;