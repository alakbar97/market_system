import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, children, path }) {

    const token = localStorage.getItem('user_token');
    return (
        token ?
            <Route exact path={path} component={Component} />
            :
            <Redirect to={'/login'} />
    )
};

export default PrivateRoute;