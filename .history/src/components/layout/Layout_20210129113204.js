import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import Greeting from '../greeting/Greeting'
import Events from '../events/Events'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        categories.forEach((category) => {
          this[category.id] = React.createRef();
        });
      }

      scrollToCategory = (id) => {
        this[id].current.scrollIntoView({ inline: "center" });
      };

      render() {
        return (
            <body className="glass">
                <section className={css(styles.greeting)}>
                    <Greeting />
                </section>
                <section className={css(styles.events)}>
                    <Events />
                </section>
                <section className={css(styles.widget_player)}>
                    <div className={css(styles.widgets)}>
                        <div className={css(styles.widget_slot_start)}>
                            Hello
                        </div>
                        <div className={css(styles.widget_slot_end)}>
                            Friend
                        </div>
                    </div>
                </section>
            </body>
        )
      }
}

const styles = StyleSheet.create({
    greeting: {
        justifyContent: 'space-between',
        paddingTop: '32px',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
    },
    events: {
        paddingTop: '16px',
        display: 'flex',
        width: '100vw'
    },
    widget_player: {
        backgroundColor: '#f7f7f7',
        marginTop: '32px',
        paddingTop: '32px',
        height: '100vh'
    },
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
    block: {
        backgroundColor: '#111111',
        display: 'grid',
        color: 'white',
        marginTop: '8px',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '24px',
        paddingBottom: '24px',
        minWidth: '332px',
        maxWidth: '364px'
    },
    block_upcoming: {
        backgroundColor: '#f7f7f7',
        display: 'grid',
        color: '#111111',
        marginTop: '8px',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '24px',
        paddingBottom: '24px',
        minWidth: '332px',
        maxWidth: '364px'
    }, 
    addIcon: {
        width: '64px',
        height: '50px',
        display: 'inline-block',
        letterSpacing: '0.5px',
        backgroundColor: '#272727',
        color: 'white',
        fontSize: '32px',
        border: '1px solid #000000',
        borderRadius: '5px',
        cursor: 'pointer'
    }
})