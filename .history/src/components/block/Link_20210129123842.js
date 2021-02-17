import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Link extends Component {
    render() {
        return (
            <div class="bc-background-youtube">
                <img className={css(styles.favicon)} src="https://www.behance.net/favicon.ico" alt=""/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: '#0057ff',
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