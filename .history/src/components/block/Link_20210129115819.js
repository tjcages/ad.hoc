import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Link extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                Be
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        alignItems: 'flex-start',
        backgroundColor: 'blue',
        borderRadius: '16px',
        display: 'flex',
        width: '64px',
        height: '64px',
        overflow: 'hidden',
        padding: '50.8px 42px',
    },
})