import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class WorkWidget extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <span className={css(styles.subtitle)} style={{paddingTop: "8px", paddingRight: "16px"}}>10:30am to 1:00pm</span>
                <span className={css(styles.title)}>Online • Work</span>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        display: 'grid',
        alignItems: 'left',
        justifyContent: 'flex-start',
        textAlign: 'left'
    },
    title: {
        fontSize: '28px',
        fontWeight: 600,
    },
    title2: {
        fontSize: '24px',
        fontWeight: 500,
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: 400,
        opacity: 0.4,
    },
    text: {
        fontSize: '18px',
        fontWeight: 400,
        opacity: 0.4
    },
})
