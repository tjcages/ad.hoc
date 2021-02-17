import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Work_Widget from './Work_Widget'

export default class Block extends Component {
    render() {
        return (
            <div className={css(styles.widgets)}>
                <div className={css(styles.widget_start)}>
                    <WorkWidget />
                </div>
                <div className={css(styles.widget_end)}>
                    Friend
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    widgets: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
    },
    widget_start: {
        marginRight: '8px',
        border: '1px solid #111111',
        flexGrow: 1,
        padding: '32px',
        textAlign: 'center',
    },
    widget_end: {
        marginLeft: '8px',
        border: '1px solid #111111',
        flexGrow: 1,
        padding: '32px',
        textAlign: 'center',
        verticalAlign: 'middle'
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