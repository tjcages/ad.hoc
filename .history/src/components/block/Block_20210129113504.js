import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Block extends Component {
    render() {
        return (
            <div className={css(styles.widgets)}>
                <div className={css(styles.widget_slot_start)}>
                    Hello
                </div>
                <div className={css(styles.widget_slot_end)}>
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
    widget_slot_start: {
        marginRight: '8px',
        border: '1px solid #111111',
        flexGrow: 1,
        padding: '32px',
        textAlign: 'center',
    },
    widget_slot_end: {
        marginLeft: '8px',
        border: '1px solid #111111',
        flexGrow: 1,
        padding: '32px',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
})