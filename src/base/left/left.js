import React, {Component} from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import './left.less'
import userInfos from '../../component/userInfos/userInfos'

class left extends Component {
    render() {
        function showLeft() {
            let modal = document.querySelector('.modal');
            let left = document.querySelector('.left');
            modal.style.display = 'none';
            left.style.display = 'block';

        }

        function hideLeft() {
            let modal = document.querySelector('.modal');
            let left = document.querySelector('.left');
            modal.style.display = 'block';
            left.style.display = 'none';
        }

        function showOrder() {
            let bottom = document.querySelector('.left-template-bottom');
            let right = document.querySelector('.one1 ');
            let down = document.querySelector('.one2');
            if(bottom.style.display == "block"){
                bottom.style.display = "none";
                down.style.display = 'block';
                right.style.display = 'none';
            }else{
                bottom.style.display = "block";
                down.style.display = 'none';
                right.style.display = 'block';
            }



        }

        function showProduct() {
            let bottom = document.querySelector('.left-template-bottom1');
            let right = document.querySelector('.two1');
            let down = document.querySelector('.two2');
            if(bottom.style.display == "block"){
                bottom.style.display = "none";
                down.style.display = 'block';
                right.style.display = 'none';
            }else{
                bottom.style.display = "block";
                down.style.display = 'none';
                right.style.display = 'block';
            }
        }

        function showUser() {
            let bottom = document.querySelector('.left-template-bottom2');
            let right = document.querySelector('.three1');
            let down = document.querySelector('.three2');
            if(bottom.style.display == "block"){
                bottom.style.display = "none";
                down.style.display = 'block';
                right.style.display = 'none';
            }else{
                bottom.style.display = "block";
                down.style.display = 'none';
                right.style.display = 'block';
            }


        }

        function goToOrder () {
            alert('hh')
        }

        return (
            <div>
                <div className="modal" onClick={showLeft}>
                    <div className="modal-order" onClick={this.handleClick}>
                        <div className="modal-top">
                            <i className="iconfont icon-dingdan1"></i>
                        </div>
                        <div className="modal-bottom">
                            <span>订单</span>
                        </div>
                    </div>
                    <div className="modal-user">
                        <div className="modal-top">
                            <i className="iconfont icon-shangpin1"></i>
                        </div>
                        <div className="modal-bottom">
                            商品
                        </div>

                    </div>
                    <div className="modal-product">
                        <div className="modal-top">
                            <i className="iconfont  icon-person-copy"></i>
                        </div>
                        <div className="modal-bottom">
                            用户
                        </div>
                    </div>
                </div>
                <div className="left">
                    <div className="tc" onClick={hideLeft}>
                        <i className="iconfont icon-danchuceng"></i>
                        <span>点击隐藏导航栏</span>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top" onClick={showOrder}>
                            <i className="iconfont icon-dingdan1"></i>
                            <span>订单</span>
                            <i className="iconfont icon-right-trangle one1"></i>
                            <i className="iconfont icon-down-trangle1 one2"></i>
                        </div>
                        <div className="left-template-bottom ">
                            <p className="">
                                <NavLink to="/order">订单管理</NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top1" onClick={showProduct}>
                            <i className="iconfont icon-shangpin1"></i>
                            <span>商品模块</span>
                            <i className="iconfont icon-right-trangle two1"></i>
                            <i className="iconfont icon-down-trangle1 two2"></i>
                        </div>
                        <div className="left-template-bottom1">
                            <p className="">
                                <NavLink to="/product">商品管理</NavLink>
                            </p>
                            <p className="">
                                <NavLink to="/classify">品类管理</NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="left-template">
                        <div className="left-template-top" onClick={showUser}>
                            <i className="iconfont icon-person-copy"></i>
                            <span>用户</span>
                            <i className="iconfont icon-right-trangle three1"></i>
                            <i className="iconfont icon-down-trangle1 three2" ></i>
                        </div>
                        <div className="left-template-bottom2">
                            <p className="" >
                                <NavLink to="/userInfos">
                                    用户列表
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default left;
