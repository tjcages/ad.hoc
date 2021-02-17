import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const categories = [
    { 
        id: 1, 
        relative_time: 'Now',
        startTime: '9:00am',
        endTime: '9:30am',
        title: 'Design huddle',
        type: 'Online • Work'
    },
    { 
        id: 2, 
        relative_time: "Upcoming", 
        startTime: '10:30am',
        endTime: '',
        title: 'Sketching session',
        type: 'Online • Work'
    },
    { 
        id: 3, 
        relative_time: " ",
        startTime: '1:00pm',
        endTime: '2:00pm',
        title: 'Lunch @ Harbour',
        type: 'Denver • Personal'
    },
    { 
        id: 2, 
        relative_time: "", 
        startTime: '2:00am',
        endTime: '',
        title: 'Tech sync',
        type: 'Online • Work'
    },
    { 
        id: 2, 
        relative_time: "", 
        startTime: '3:00am',
        endTime: '',
        title: 'Action items',
        type: 'Online • Work'
    },
  ];

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
                    <div className={css(styles.greeting_flex)}>
                        <span className={css(styles.title)}>Good morning, <span style={{color: "#fac03e"}}>Tyler J.</span></span>
                        <div className={css(styles.greeting_time)}>
                            <span className={css(styles.subtitle)} style={{paddingTop: "8px", paddingRight: "16px"}}>Thursday, 24th July</span>
                            <span className={css(styles.title)}>9:15am</span>
                        </div>
                    </div>
                </section>
                <section className={css(styles.events)}>
                <ul
                style={{
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    listStyleType: "none",
                    paddingLeft: '5%',
                    paddingRight: '5%',
                }}
                >
                {categories.map((category, index) => (
                    <li
                    key={category.id}
                    style={{
                        display: "inline-block",
                    }}
                    ref={this[category.id]}
                    >
                    <div className={(index === 0) ? css(styles.events_flex) : css(styles.events_flex_upcoming)}>
                        <span className={css(styles.subtitle)}>{category.relative_time}</span>
                        <div className={(index === 0) ? css(styles.block) : css(styles.block_upcoming)}>
                            <span className={css(styles.subtitle)} style={{paddingBottom: '8px'}}>{category.startTime}{category.endTime.length ? ' - '+category.endTime : ''}</span>
                            <span className={css(styles.title2)}>{category.title}</span>
                            <span className={css(styles.text)}>{category.type}</span>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
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
        justifyContent: 'center',
        paddingTop: '32px',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
    },
    greeting_flex: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center'
    },
    greeting_time: {
        textAlign: 'right'
    },
    events: {
        paddingTop: '16px',
        display: 'flex',
        width: '100vw'
    },
    events_flex: {
        display: 'inline-block',
        marginRight: '116px'
    },
    events_flex_upcoming: {
        alignItems: 'center',
        display: 'inline-block',
        marginLeft: '16px',
    },
    widget_player: {
        backgroundColor: '#f7f7f7',
        marginTop: '32px',
        paddingTop: '32px',
        height: 'auto'
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
        display: 'flex',
        flexDirection: 'row',
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