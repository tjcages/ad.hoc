import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Link extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <img className={css(styles.favicon)} src="https://mail.google.com/favicon.ico" alt=""/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        border: '2px solid #E5E5E5',
        textAlign: 'center',
        verticalAlign: 'middle',
        borderRadius: '12px',
        width: '100px',
        height: '100px',
        marginRight: '10px',
    },
    favicon: {
        width: '32px',
        height: '32px',
        paddingTop: '32px',
        paddingBottom: '32px',
    }
})