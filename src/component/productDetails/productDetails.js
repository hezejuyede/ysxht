import React, {Component} from 'react';
import './productDetails.less'
import Header from '../../base/header/herder'
import Footer from '../../base/footer/footer'
import Left from '../../base/left/left'

class productDetails extends Component {

    render() {
        const productDetails = [
            {
                goodsInfo: [
                    {
                        title: '亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹',
                        price: 199,
                        number: 999,
                        id: 'px004',
                        gg:'共1600-2000g 2只装 大螃蟹 海鲜年货',
                        sl:1
                    }
                ],
                smallImg: [
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg'},
                    {simg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg'}
                ],
                bigImg: [
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/31.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/32.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/33.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/34.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/35.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/36.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/37.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/38.jpg'},
                    {bimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/39.jpg'},

                ],
                productImg: [
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg'},
                    {pimg: 'http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg'}
                ],
                details: [
                    {
                        bzq: '2',
                        pp: '亿成优生鲜',
                        tj: '深冷、冷冻 -18℃',
                        jhl: '1600g'
                    }
                ],
                showBottom: [
                    {text:'商品介绍'},
                    {text:'规格与包装'},
                    {text:'售后保障'},
                    {text:'商品评价'}
                ]

            }
        ];
        return (
            <div className="ysx-productDetails">
                <Header/>
                <Left/>
                <div className="productDetails">
                    <div className="productDetails-template">
                        <div className="productDetails-name">
                            <p className="leftP">商品名称:</p>
                            <p className="rightP">亿成优生鲜 爱尔兰面包蟹（1000-800g*2只）熟冻黄金蟹 海鲜 螃蟹</p>
                        </div>
                        <div className="productDetails-ms">
                            <p className="leftP">商品描述:</p>
                            <p className="rightP">共1600-2000g 2只装 大螃蟹 海鲜年货</p>
                        </div>
                        <div className="productDetails-state">
                            <p className="leftP">当前状态</p>
                            <p className="rightP">在售</p>
                        </div>
                        <div className="productDetails-classify">
                            <p className="leftP">商品分类</p>
                            <p className="rightP">螃蟹类</p>
                        </div>
                        <div className="productDetails-price">
                            <p className="leftP">商品价格</p>
                            <p className="rightP">￥199</p>
                        </div>
                        <div className="productDetails-number">
                            <p className="leftP">商品库存</p>
                            <p className="rightP">999</p>
                        </div>
                        <div className="productDetails-img">
                            <p className="leftP">商品图片</p>
                            <div className="rightP">
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/1.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/2.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/3.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/4.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/5.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/6.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/7.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/8.jpg"/>
                                </div>
                                <div className="">
                                    <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/9.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="productDetails-template-xq">
                            <p className="template-xq-top">商品详情</p>
                            <div className="template-xq-bottom">
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/10.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/11.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/12.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/13.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/14.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/15.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/17.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/18.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/19.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/20.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/21.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/22.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/23.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/24.jpg" alt=""/>
                                <img src="http://www.ilqiqi.top/pc/img/gooddatails/crab/brown_cab/25.jpg" alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default productDetails;