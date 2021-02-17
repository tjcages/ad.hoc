import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Link extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <img src="https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com" alt=""/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'inline',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: '12px',
        width: '100px',
        height: '100px',
    },
})