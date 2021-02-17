import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import LinkRow from './LinkRow'

export default class WorkWidget extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <div className={css(styles.additionalLinks)}>
                    <LinkRow />
                    <LinkRow />
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        display: 'block',
        alignItems: 'left',
        justifyContent: 'flex-start',
        textAlign: 'left',
        width: '100%'
    },
    additionalLinks: {
        marginTop: '20px',
        marginRight: '10px'
    },
})
