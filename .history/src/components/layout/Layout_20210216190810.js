import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Greeting from '../greeting/Greeting'
import Events from '../events/Events'
import Block from '../block/Block'

import AuthService from '../../backend/AuthService';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <strong>Email: </strong> {currentUser.email && currentUser.email}
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
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        )
    }
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