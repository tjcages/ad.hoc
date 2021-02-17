import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Alert, Button } from 'react-bootstrap'

import Greeting from '../greeting/Greeting'
import Events from '../events/Events'
import Block from '../block/Block'

import AuthService from '../../backend/AuthService';

export default function Layout() {
    const [error, setError] = useState()

    async function handleLogout() {
        setError('')

        try {
            // await logout()
            // history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            <section className={css(styles.greeting)}>
                <Greeting />
            </section>
            <section>
                <AuthService />
            </section>
            <section className={css(styles.events)}>
                <Events />
            </section>
            <section className={css(styles.block)}>
                <Block />
            </section>
        </div>
    )
}

const styles = StyleSheet.create({
    greeting: {
        justifyContent: 'space-between',
        paddingTop: '32px',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
    },
    events: {
        paddingTop: '16px',
        display: 'flex',
        width: '100vw'
    },
    block: {
        backgroundColor: '#f7f7f7',
        marginTop: '32px',
        paddingTop: '32px',
        height: '95vh'
    },
})