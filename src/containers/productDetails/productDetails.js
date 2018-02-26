import React, {Component} from 'react';
import './productDetails.less'
import axios from 'axios';
import PureRenderMixin from 'react-addons-pure-render-mixin'



import Header from '../../component/header/herder'
import Footer from '../../component/footer/footer'
import Left from '../../component/left/left'

class productDetails extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            productInfo: [],
            productImg:[],
            productDetailImg:[],

        }
    }

    render() {
        const productImg = this.state.productImg;
        const productInfo = this.state.productInfo;
        return (
            <div className="ysx-productDetails">
                <Header/>
                <Left/>
                <div className="productDetails">
                    <div  className="productDetails-template">
                        {productInfo.map((item, index) => {
                            return <div key={index}className="">
                                <div className="productDetails-name">
                                    <p className="leftP">商品名称:</p>
                                    <p className="rightP">{item.name}</p>
                                </div>
                                <div className="productDetails-ms">
                                    <p className="leftP">商品描述:</p>
                                    <p className="rightP">{item.gg}</p>
                                </div>
                                <div className="productDetails-state">
                                    <p className="leftP">当前状态</p>
                                    <p className="rightP">在售</p>
                                </div>
                                <div className="productDetails-classify">
                                    <p className="leftP">商品分类</p>
                                    <p className="rightP">{item.fl}</p>
                                </div>
                                <div className="productDetails-price">
                                    <p className="leftP">商品价格</p>
                                    <p className="rightP">￥{item.price}</p>
                                </div>
                                <div className="productDetails-number">
                                    <p className="leftP">商品库存</p>
                                    <p className="rightP">{item.number}</p>
                                </div>
                                <div className="productDetails-img">
                                    <p className="p-img-left">商品图片</p>
                                    <div className="p-img-right">
                                        <img src={item.img}/>
                                    </div>
                                </div>
                            </div>
                        })}
                            <div className="productDetails-template-xq">
                                <p className="template-xq-top">商品详情</p>

                                {productImg.map((item, index) => {
                                    return   <div key={index} className="template-xq-bottom">
                                        <img src={item.pimg} alt=""/>
                                    </div>
                                })}

                            </div>
                        </div>
                </div>
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        this._getProductDetail();

    };

    _getProductDetail() {
        let  str = this.props.match.params.id;
        let  l =str.length;
        let id;
        let index;
        if (l <= 4) {
            id = str.slice(1);
            index = str.slice(0, 1);
        } else if (l = 5) {
            index = str.slice(0, 2);
            id = str.slice(2);
        } else if (l = 6) {
            index = str.slice(0, 3);
            id = str.slice(3);
        }

        axios.get("/admProductDetails", {
            params: {
                id: id
            }
        })
            .then((res) => {
                let goodsData = res.data[0].goodsImg;
                this.setState({
                    productInfo: goodsData[index].goodsInfo,
                    productImg: goodsData[index].productImg,
                    productdetails: goodsData[index].details
                })
            })
            .catch((err) => {
                console.log(err)
            })
    };
}

export default productDetails;