import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Products from './Products/Products';
import Home from './Home/Home';
import ProductDetail from './Products/ProductDetail';

function Pages(){
    return (
            <section>
                <Switch>
                    <Route exact path='/'  component={Home} />
                    <Route exact path='/products'  component={Products} />
                    <Route exact path='/product/:id' component={ProductDetail}/>
                </Switch>
            </section>
    )
}

export default Pages;