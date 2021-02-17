import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import '../../styling/home.css'
import { useDispatch } from 'react-redux'
import { setSignedIn, setUserData } from '../../backend/UserSlice'

export default function Homepage() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (response) => {
        console.log(response)

        setError('')
        setLoading(true)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))

        history.push('/')
    }

    // async function handleSubmit(e) {
    //     console.log('handleSubmit')
    //     try {
            // setError('')
            // setLoading(true)
    //         await login(emailRef.current.value, passwordRef.current.value)
    //         history.push('/')
    //     } catch {
    //         setError('Failed to sign in')
    //     }
    // }

    async function handleLogout() {
        setError('')

        try {
            // await logout()
            dispatch(setSignedIn(false))
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div className="home_page">
            <div className="login_message">
                {error && <Alert variant="danger">{error}</Alert>}
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
                    disabled={renderProps.disabled || loading}
                    className="login_button"
                    >
                        Login with Google
                    </button>
                )} 
                onSuccess={handleSubmit}
                onFailure={handleSubmit}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                />

                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign up</Link>
                </div>

                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                </div>
            </div>
        </div>
    )
}