import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectSignedIn } from "@reduxjs/toolkit";

export default function PrivateRoute({ component: Component, ...rest }) {
    // const { currentUser } = AuthService()
    const isSignedIn = useSelector(selectSignedIn)

    return (
        <Route 
        {...rest} 
        render={props => {
            return isSignedIn ? <Component {...props} /> : <Redirect to="/login" />
        }}>
        </Route>
    )
}
