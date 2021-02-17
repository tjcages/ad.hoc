import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthService } from '../../backend/AuthService'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = AuthService()

    return (
        <Route 
        {...rest} 
        render={props => {
            return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}>
        </Route>
    )
}
