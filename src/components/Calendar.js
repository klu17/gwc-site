import React, { Component } from "react";
 
class Calendar extends Component {
  render() {
    return (
      <div>
        <h2>Calendar</h2>
        <p>Here is a calendar of our upcoming events.</p>
        <iframe src="https://calendar.google.com/calendar/embed?src=ophbq5agj0k356fte9u3npvou4%40group.calendar.google.com&ctz=America%2FNew_York" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      </div>
    );
  }
}
 
export default Calendar;
