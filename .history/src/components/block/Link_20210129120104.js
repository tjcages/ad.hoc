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
        display: 'inline-flex',
        backgroundColor: 'blue',
        borderRadius: '12px',
        width: '100px',
        height: '100px',
    },
})