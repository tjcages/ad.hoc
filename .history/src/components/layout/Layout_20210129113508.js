import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Greeting from '../greeting/Greeting'
import Events from '../events/Events'

export default class Layout extends Component {
      render() {
        return (
            <body className="glass">
                <section className={css(styles.greeting)}>
                    <Greeting />
                </section>
                <section className={css(styles.events)}>
                    <Events />
                </section>
                <section className={css(styles.widget_player)}>
                    <Block />
                </section>
            </body>
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
    widget_player: {
        backgroundColor: '#f7f7f7',
        marginTop: '32px',
        paddingTop: '32px',
        height: '100vh'
    },
    title: {
        fontSize: '28px',
        fontWeight: 600,
    },
    title2: {
        fontSize: '24px',
        fontWeight: 500,
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: 400,
        opacity: 0.4,
    },
    text: {
        fontSize: '18px',
        fontWeight: 400,
        opacity: 0.4
    },
    addIcon: {
        width: '64px',
        height: '50px',
        display: 'inline-block',
        letterSpacing: '0.5px',
        backgroundColor: '#272727',
        color: 'white',
        fontSize: '32px',
        border: '1px solid #000000',
        borderRadius: '5px',
        cursor: 'pointer'
    }
})