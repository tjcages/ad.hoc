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
        width: '124px',
        height: '124px',
        overflow: 'hidden'
    },
})