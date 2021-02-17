import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Greeting extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <div className={css(styles.greeting_flex)}>
                    <span className={css(styles.title)}>Good morning, <span style={{color: "#fac03e"}}>Tyler J.</span></span>
                    <div className={css(styles.greeting_time)}>
                        <span className={css(styles.subtitle)} style={{paddingTop: "8px", paddingRight: "16px"}}>Thursday, 24th July</span>
                        <span className={css(styles.title)}>9:15am</span>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        display: "flex",
        justifyContent: 'space-between',
    },
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
    title2: {
        fontSize: '24px',
        fontWeight: 500,
    },
})