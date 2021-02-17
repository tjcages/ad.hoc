import React from "react";
import './TestLayout.css'

function App() {
  return (
    <Group347
      now="Now"
      upcoming="Upcoming"
      group4Props={Group347Data.group4Props}
      group42Props={Group347Data.group42Props}
      group43Props={Group347Data.group43Props}
      group44Props={Group347Data.group44Props}
      group45Props={Group347Data.group45Props}
    />
  );
}

export default App;


function Group347(props) {
  const { now, upcoming, group4Props, group42Props, group43Props, group44Props, group45Props } = props;

  return (
    <div className="group-347">
      <div className="group-337">
        <div className="now nunitosans-semi-bold-black-24px">{now}</div>
        <Group4 designHuddle={group4Props.designHuddle} date={group4Props.date} onlineWork={group4Props.onlineWork} />
      </div>
      <div className="group-338">
        <div className="auto-flex">
          <div className="upcoming nunitosans-semi-bold-black-24px">{upcoming}</div>
          <Group4
            designHuddle={group42Props.designHuddle}
            date={group42Props.date}
            onlineWork={group42Props.onlineWork}
            className="group-5"
          />
        </div>
        <Group4
          designHuddle={group43Props.designHuddle}
          date={group43Props.date}
          onlineWork={group43Props.onlineWork}
          className="group-"
        />
        <Group4
          designHuddle={group44Props.designHuddle}
          date={group44Props.date}
          onlineWork={group44Props.onlineWork}
          className="group-"
        />
        <Group4
          designHuddle={group45Props.designHuddle}
          date={group45Props.date}
          onlineWork={group45Props.onlineWork}
          className="group-"
        />
      </div>
    </div>
  );
}


function Group4(props) {
  const { designHuddle, date, onlineWork, className } = props;

  return (
    <div className={`group-4 ${className || ""}`}>
      <div className="group-3">
        <div className="overlap-group">
          <h1 className="design-huddle nunitosans-semi-bold-white-32px">{designHuddle}</h1>
          <div className="date nunitosans-semi-bold-white-24px">{date}</div>
          <div className="online-work nunitosans-semi-bold-white-16px">{onlineWork}</div>
        </div>
      </div>
    </div>
  );
}
const group4Data = {
    designHuddle: "Design huddle",
    date: "9:00am",
    onlineWork: "Online • Work",
};

const group42Data = {
    designHuddle: "Sketching session",
    date: "10:30am",
    onlineWork: "Online • Work",
};

const group43Data = {
    designHuddle: "Lunch @ Harbour",
    date: "1:00pm",
    onlineWork: "Holbaek, DK • Personal",
};

const group44Data = {
    designHuddle: "To do items",
    date: "2:00pm",
    onlineWork: "Online • Work",
};

const group45Data = {
    designHuddle: "Neglect other work",
    date: "4:00pm",
    onlineWork: "Online • Work",
};

const Group347Data = {
    now: "Now",
    upcoming: "Upcoming",
    group4Props: group4Data,
    group42Props: group42Data,
    group43Props: group43Data,
    group44Props: group44Data,
    group45Props: group45Data,
};

