import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Greeting from '../greeting/Greeting'
import Events from '../events/Events'
import Block from '../block/Block'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.auth = props.auth
    }

    render() {
        return (
            <body className="glass">
                <section className={css(styles.greeting)}>
                    <Greeting />
                </section>
                <section>
                <button onClick={this.auth.login}>Login</button>
                <button onClick={this.auth.getCalendar}>Get Google Calendar</button>

                <ul
                style={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    listStyleType: 'none',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                }}
                >
                    {this.auth}
                {/* {this.auth.calendarItems.map((item) => (
                    <li
                    key={item.id}
                    style={{
                        display: "inline-block",
                    }}
                    ref={this[item.id]}
                    >
                    <h3>{{ item }}</h3>
                    <hr></hr>
                    </li>
                ))} */}
                </ul>
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
        width: '100vw'
    },
    block: {
        backgroundColor: '#f7f7f7',
        marginTop: '32px',
        paddingTop: '32px',
        height: '95vh'
    },
})