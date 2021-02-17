import React from 'react'
import '../styling/home.css'

import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice'

import Auth from '../features/Auth'

const Homepage = () => {

    const dispatch = useDispatch()

    const login = (response) => {
        console.log('response: ' + response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="home_page" style={{display: isSignedIn ? "none" : ""}}>
            {!isSignedIn ? (
            <div className="login_message">
                <h2>📚</h2>
                <h1>A Readers favorite place!</h1>
                <p>
                    We provide high quality online resources for reading blogs. Just sign up and start reading some quality blogs.
                </p>


                <Auth />


                <button
                    onClick={login}
                    className="login_button"
                    >
                        Login with Google
                </button>
            </div>
            ) : ""}
        </div>
    )
}

export default Homepage;