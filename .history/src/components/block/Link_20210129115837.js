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
        borderRadius: '12px',
        display: 'flex',
        width: '32px',
        height: '32px',
        overflow: 'hidden',
        padding: '50.8px 42px',
    },
})