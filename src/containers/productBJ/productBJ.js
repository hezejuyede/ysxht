import React, {Component} from 'react';
import './productBJ.less'
import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

class productBJ extends Component {
    render() {
        return (
            <div className="ysx-productBJ">
                <Header/>
                <Left/>
                <div className="productBJ">
                    <div className="productBJ-top">
                        商品管理 -- 添加商品
                    </div>
                    <div className="productBJ-bottom">
                        <div className="productBJ-bottom-div">
                            <div className="productBJ-bottom-div-left">
                                <p>商品名称:</p>
                            </div>
                            <div className="productBJ-bottom-div-right">
                                <input type="text" placeholder="请输入商品名称"/>
                            </div>
                        </div>
                        <div className="productBJ-bottom-div">
                            <div className="productBJ-bottom-div-left">
                                <p>商品描述:</p>
                            </div>
                            <div className="productBJ-bottom-div-right">
                                <input type="text" placeholder="请输入商品描述"/>
                            </div>
                        </div>
                        <div className="productBJ-bottom-div">
                            <div className="productBJ-bottom-div-left">
                                <p>商品价格:</p>
                            </div>
                            <div className="productBJ-bottom-div-right">
                                <input type="text" placeholder="请输入商品价格"/>
                            </div>
                        </div>
                        <div className="productBJ-bottom-div">
                            <div className="productBJ-bottom-div-left">
                                <p>商品库存:</p>
                            </div>
                            <div className="productBJ-bottom-div-right">
                                <input type="text" placeholder="请输入商品库存"/>
                            </div>
                        </div>
                        <div className="productBJ-bottom-div">
                            <div className="productBJ-bottom-div-left">
                                <p>所属分类:</p>
                            </div>
                            <div className="productBJ-bottom-div-right">
                                <select>
                                    <option value="">螃蟹类</option>
                                    <option value="">大虾类</option>
                                    <option value="">鲜鱼类</option>
                                    <option value="">羊肉类</option>
                                    <option value="">牛肉类</option>
                                    <option value="">猪肉类</option>
                                    <option value="">火锅丸</option>
                                    <option value="">调味料</option>
                                    <option value="">精面点</option>
                                    <option value="">鸡肉类</option>
                                    <option value="">鸭肉类</option>
                                </select>
                            </div>
                        </div>
                        <div className="productBJ-bottom-div">
                            <div className="productBJ-bottom-div-left">
                                <p>商品图片:</p>
                            </div>
                            <div className="productBJ-bottom-div-right">
                                <input type="file"/>
                            </div>
                        </div>
                        <div className="">
                            <div className="productBJ-bottom-div-left">
                                <p className="productXQ">商品详情:</p>
                            </div>
                            <div className="productBJ-bottom-div-right">
                                <textarea></textarea>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default productBJ;