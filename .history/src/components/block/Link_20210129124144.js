import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Link extends Component {
    render() {
        return (
            <div 
                class="bc-background-asana"
                style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    borderRadius: '12px',
                    width: '100px',
                    height: '100px',
                    marginRight: '10px',
                }}
            >
                <img className={css(styles.favicon)} src="https://www.asana.com/favicon.ico" alt=""/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
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