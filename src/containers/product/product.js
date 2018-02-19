import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './product.less'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

class product extends Component {
    render() {
        return (
            <div className="className">
                <Header/>
                <Left/>

                <div className="ysx-product">
                    <div className="product-top">
                        <div className="product-top-left">
                            <span>商品管理</span>
                        </div>
                        <div className="product-top-right">
                            <i className="iconfont icon-add"></i>
                            <NavLink to="/productBj">添加商品</NavLink>
                        </div>

                    </div>
                    <div className="product-cx">
                        <div className="product-cx-left">
                           <select>
                               <option value ="id">根据商品ID查询</option>
                               <option value ="name">根据商品名称查询</option>
                           </select>
                        </div>
                        <div className="product-cx-right">
                            <input type="text" placeholder="关键字"/>
                            <button type="submit">查询</button>
                        </div>
                    </div>
                    <div className="product-center">
                        <div className="product-center-top">
                            <p className="product-template-id">
                                ID
                            </p>
                            <p className="product-template-title">
                                商品名称
                            </p>
                            <p className="product-template-price">
                                价格
                            </p>
                            <p className="product-template-state">
                                状态
                            </p>
                            <p className="product-template-cz">
                                操作
                            </p>
                        </div>
                        <div className="product-center-bottom">
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <NavLink to="/productDetails" className="cz-ck">查看</NavLink>
                                    <NavLink to="/productBj" className="cz-bj">编辑</NavLink>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                            <div className="product-template">
                                <p className="product-template-id">
                                    001
                                </p>
                                <p className="product-template-title">
                                    聚福鲜 冷冻智利三文鱼刺身 500g 袋装 海鲜年货 生鱼片
                                </p>
                                <p className="product-template-price">
                                    ￥199
                                </p>
                                <p className="product-template-state">
                                    <span className="state-zs">在售</span>
                                    <span className="state-xj">下架</span>
                                </p>
                                <p className="product-template-cz" >
                                    <span className="cz-ck">查看</span>
                                    <span className="cz-bj">编辑</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-bottom">
                        <div className="">
                            <i className="iconfont icon-left-trangle"></i>
                        </div>
                        <div className="product-red">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                        <div className="">...</div>
                        <div className="">20</div>
                        <div className="">
                            <i className="iconfont icon-right-trangle"></i>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default product;

