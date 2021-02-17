import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class WorkWidget extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <span className={css(styles.title)}>Good morning, <span style={{color: "#fac03e"}}>Tyler J.</span></span>
                <div className={css(styles.greeting_time)}></div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
    },
})
