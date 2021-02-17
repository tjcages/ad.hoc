import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import LinkBlock from './LinkBlock'
import LinkRow from './LinkRow'

export default class WorkWidget extends Component {
    render() {
        return (
            <div className={css(styles.flex)}>
                <span className={css(styles.subtitle)} style={{paddingTop: "8px", paddingRight: "16px"}}>10:30am to 1:00pm</span>
                <span className={css(styles.title)}>Online <span style={{fontSize: '18px', fontWeight: 400}}>•</span> Work</span>

                <div className={css(styles.links)}>
                    <LinkBlock />
                    <LinkBlock />
                    <LinkBlock />
                </div>
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
        display: 'grid',
        alignItems: 'left',
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
    links: {
        alignItems: 'flex-start',
        display: 'flex',
        marginTop: '20px',
    },
    additionalLinks: {
        marginTop: '10px',
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
