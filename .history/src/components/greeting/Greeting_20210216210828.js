import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import { GoogleLogout } from 'react-google-login'
import { StyleSheet, css } from 'aphrodite/no-important'
import { setUserData, selectUserData, setSignedIn, selectSignedIn } from '../features/userSlice'

export function Greeting() {
    const dispatch = useDispatch()
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)

    const logout = (response) => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }
    
    return (
        <div className={css(styles.greeting_flex)}>
            <span className={css(styles.title)}>Good morning, <span style={{color: "#fac03e"}}>Tyler J.</span></span>
            <div className={css(styles.greeting_time)}>
                <span className={css(styles.subtitle)} style={{paddingTop: "8px", paddingRight: "16px"}}>Thursday, 24th July</span>
                <span className={css(styles.title)}>9:15am</span>

                {isSignedIn ? (
                    <div className="navbar_user_data">
                        <Avatar className="user" src={userData?.imageUrl} alt={userData?.name} />
                        <h1 className="signedIn">{userData?.name}</h1>
                        <GoogleLogout
                        clientId="699620956557-821i2pm3rfan358gd1cl0psts5cg2d36.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="logout_button"
                            >
                                Logout 🙃
                            </button>
                        )}
                        onLogoutSuccess={logout}
                        />
                    </div>
                ) : (
                    <h1 className="notSignedIn">User not available 😞</h1>
                )}
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    greeting_flex: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
    },
    greeting_time: {
        textAlign: 'right'
    },
    title: {
        fontSize: '28px',
        fontWeight: 600,
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: 400,
        opacity: 0.4,
    },
})