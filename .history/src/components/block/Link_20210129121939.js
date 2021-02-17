import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Link extends Component {

    getBackground() {
        var getBody = document.getElementsByTagName("body")[0]
        var prop = window.getComputedStyle(getBody).getPropertyValue("background-color");
    
        if (prop === "transparent") {
            console.log("No background colour set")
        } else {
            console.log(prop);
        }
    }

    render() {
        return (
            <div className={css(styles.flex)}>
                <img className={css(styles.favicon)} src="https:www.behance.com/favicon.ico" alt=""/>
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
        backgroundColor: '#0057ff',
        borderRadius: '12px',
        width: '100px',
        height: '100px',
    },
    favicon: {
        width: '24px',
        height: '24px'
    }
})