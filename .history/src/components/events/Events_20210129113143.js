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

export default class Events extends Component {
    render() {
        return (
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
        )
    }
}

const styles = StyleSheet.create({
    events_flex: {
        display: 'inline-block',
        marginRight: '116px'
    },
    events_flex_upcoming: {
        alignItems: 'center',
        display: 'inline-block',
        marginLeft: '16px',
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