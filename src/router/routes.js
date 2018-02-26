import React, {Component} from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Home from '../containers/home/home';
import Register from '../containers/register/register'
import Login from '../containers/login/login'
import setUp from '../containers/setUp/setUp'
import Message from '../containers/message/message'
import UserInfos from '../containers/userInfos/userInfos'
import Order from '../containers/order/order'
import Classify from '../containers/classIfy/classify'
import Product from '../containers/product/product'
import productDetails from '../containers/productDetails/productDetails'
import productBj from '../containers/productBJ/productBJ'
import orderDetails from '../containers/orderDetail/orderDetail'
import productAll from '../containers/productAll/productAll'
import productAdd from '../containers/productAdd/productAdd'
class Routers extends Component {
    render() {
        return (
            <Router history={this.props.history}>
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
                    <Route path="/orderDetails/:id" component={orderDetails}>
                    </Route>
                    <Route path="/classify" component={Classify}>
                    </Route>
                    <Route path="/product/:id" component={Product}>
                    </Route>
                    <Route path="/productAll" component={productAll}>
                    </Route>
                    <Route path="/productAdd" component={productAdd}>
                    </Route>
                    <Route path="/productBj/:id" component={productBj}>
                    </Route>
                    <Route path="/productDetails/:id" component={productDetails}>
                    </Route>
                    <Redirect from="/" to="/home">
                    </Redirect>
                </Switch>
            </Router>
        )
    }
}

export default Routers
