import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Greeting from '../greeting/Greeting'
import Events from '../events/Events'
import Block from '../block/Block'

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
                <section className={css(styles.block)}>
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
        width: '95vw'
    },
    block: {
        backgroundColor: '#f7f7f7',
        marginTop: '32px',
        paddingTop: '48px',
        height: '100vh'
    },
})