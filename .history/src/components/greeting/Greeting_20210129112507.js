import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        return (
            <div>
                <div className={css(styles.greeting_flex)}>
                    <span className={css(styles.title)}>Good morning, <span style={{color: "#fac03e"}}>Tyler J.</span></span>
                    <div className={css(styles.greeting_time)}>
                        <span className={css(styles.subtitle)} style={{paddingTop: "8px", paddingRight: "16px"}}>Thursday, 24th July</span>
                        <span className={css(styles.title)}>9:15am</span>
                    </div>
                </div>
            </div>
        )
    }
}
