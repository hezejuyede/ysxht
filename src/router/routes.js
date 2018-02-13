import React, {Component} from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Home from '../component/home/home';
import Register from '../component/register/register'
import Login from '../component/login/login'
import setUp from '../component/setUp/setUp'
import Message from '../component/message/message'
import UserInfos from '../component/userInfos/userInfos'
import Order from '../component/order/order'
import Classify from '../component/classIfy/classify'
import Product from '../component/product/product'
import productDetails from '../component/productDetails/productDetails'
import productBj from '../component/productBJ/productBJ'
class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={Home}>
                    </Route>
                    <Route path="/Register" component={Register}>
                    </Route>
                    <Route path="/Login" component={Login}>
                    </Route>
                    <Route path="/setUp" component={setUp}>
                    </Route>
                    <Route path="/Message" component={Message}>
                    </Route>
                    <Route path="/userInfos" component={UserInfos}>
                    </Route>
                    <Route path="/order" component={Order}>
                    </Route>
                    <Route path="/classify" component={Classify}>
                    </Route>
                    <Route path="/product" component={Product}>
                    </Route>
                    <Route path="/productBj" component={productBj}>
                    </Route>
                    <Route path="/productDetails" component={productDetails}>
                    </Route>
                    <Redirect from="/" to="/home">
                    </Redirect>
                </Switch>
            </Router>
        )
    }
}

export default Routers
