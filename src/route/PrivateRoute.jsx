import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({Component, path, user}) => {
    if(user === null) return <Redirect to="/"/>

    return (
        <Route path={path}>
            <Component/>
        </Route>
    );
};
