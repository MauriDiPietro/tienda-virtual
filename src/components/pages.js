import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Products from './Products/Products';
import Home from './Home/Home';

function Pages(){
    return (
            <section>
                <Switch>
                    <Route exact path='/'  component={Home} />
                    <Route exact path='/products'  component={Products} />
                </Switch>
            </section>
    )
}

export default Pages;