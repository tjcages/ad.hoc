import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Link extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <div className={css(styles.iconContainer)}>
                    <img className={css(styles.favicon)} src="https://mail.google.com/favicon.ico" alt=""/>
                </div>
                <span>Tezting</span>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        borderRadius: '12px',
        width: '100%',
        marginTop: '10px',
    },
    iconContainer: {
        borderRadius: '12px',
        border: '2px solid #E5E5E5',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    favicon: {
        width: '32px',
        height: '32px',
        paddingTop: '32px',
        paddingBottom: '32px',
    }
})