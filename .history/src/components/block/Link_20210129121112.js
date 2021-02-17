import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

var link = document.getElementById('listitem0');  // Find element

// Cross Browser Solution to get the color of link
var getStyle = function(el, cssProperty){
    if(typeof getComputedStyle !== 'undefined'){
        return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
    } else {
        // This will work in legacy browsers(IE8 and below)
        return el.currentStyle[cssProperty];
    }
}

var colorName = getStyle("www.behance.com", 'color');
alert(colorName)

export default class Link extends Component {

    render() {
        return (
            <div className={css(styles.flex)}>
                <img src="https://s2.googleusercontent.com/s2/favicons?domain=www.behance.com" alt=""/>
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