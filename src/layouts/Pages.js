import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';
// import ErrorPage from '../pages/ErrorPage';


const Pages = () => {

    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/admin' component={AdminPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/product' component={ProductPage} />
                {/* <Route path='' exact component={ErrorPage} /> */}
            </Switch>
        </>
    );
}

export default Pages;
