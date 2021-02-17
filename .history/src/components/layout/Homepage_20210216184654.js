import React from 'react'
import GoogleLogin from 'react-google-login'
import { Alert, Button } from 'react-bootstrap'
import '../../styling/home.css'

import { useAuth } from '../../backend/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, setSignedIn, setUserData } from '../../backend/UserSlice'

export default function Homepage() {
    const [error, setError] = useState()
    const { currentUser, logout } = useAuth()
    const dispatch = useDispatch()

    const login = (response) => {
        console.log('response: ' + response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="home_page" style={{display: isSignedIn ? "none" : ""}}>
            <strong>Email: </strong> {currentUser.email}
            {error && <Alert variant="danger">{error}</Alert>}
            {!isSignedIn ? (
            <div className="login_message">
                <h2>👨‍💻</h2>
                <h1>Work smarter not harder</h1>
                <p>
                    We provide high quality online resources for reading blogs. Just sign up and start reading some quality blogs.
                </p>

                <GoogleLogin
                clientId="699620956557-821i2pm3rfan358gd1cl0psts5cg2d36.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="login_button"
                    >
                        Login with Google
                    </button>
                )} 
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                />

                <Button variant="link" onClick={handleLogout}>Log Out</Button>

            </div>
            ) : ""}
        </div>
    )
}