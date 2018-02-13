import React, {Component} from 'react';
import './classify.less'
import Header from '../../base/header/herder'
import Footer from '../../base/footer/footer'
import Left from '../../base/left/left'

class userInfos extends Component {
    render() {
        return (
            <div className="ysx-classify">
                <Header/>
                <Left/>
                <div className="classify">
                    <div className="classify-top">
                        <div className="classify-top-ID">ID</div>
                        <div className="classify-top-name">品类名称</div>
                        <div className="classify-top-cz">操作</div>
                    </div>
                    <div className="classify-bottom">
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">001</div>
                            <div className="classify-bottom-name">螃蟹类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">002</div>
                            <div className="classify-bottom-name">大虾类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">003</div>
                            <div className="classify-bottom-name">鲜鱼类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">004</div>
                            <div className="classify-bottom-name">鸡肉类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">005</div>
                            <div className="classify-bottom-name">鸭肉类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">006</div>
                            <div className="classify-bottom-name">羊肉类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">007</div>
                            <div className="classify-bottom-name">猪肉类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">008</div>
                            <div className="classify-bottom-name">牛肉类</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">001</div>
                            <div className="classify-bottom-name">火锅丸</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">001</div>
                            <div className="classify-bottom-name">调味料</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                        <div className="classify-bottom-template">
                            <div className="classify-bottom-ID">001</div>
                            <div className="classify-bottom-name">精面点</div>
                            <div className="classify-bottom-cz">
                                <span className="classify-bottom-cz-xg">
                                    修改
                                </span>
                                <span className="classify-bottom-cz-xg">
                                    查看子品类
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default userInfos;
