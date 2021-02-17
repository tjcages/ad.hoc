import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import '../../styling/home.css'

import { useAuth } from '../../backend/AuthContext'

export default function Homepage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
    }

    return (
        <div className="home_page">
            {error && <Alert variant="danger">{error}</Alert>}
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
                onSuccess={handleSubmit}
                onFailure={handleSubmit}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                />

                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    )
}