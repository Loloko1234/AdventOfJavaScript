import React, { useState } from 'react';
import moment from 'moment';

function App() {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const daysInMonth = Array.from({length: currentMonth.daysInMonth()}, (_, i) => i + 1);
  let firstDayOfMonth = currentMonth.clone().startOf('month').day();
  firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  return (
    <div className="wrapper">
        <button className="previous" onClick={() => setCurrentMonth(currentMonth.clone().subtract(1, 'month'))}><img src="./previous.svg" alt="Previous" /></button>
        <div className="month"><span>{currentMonth.format('MMMM YYYY')}</span></div>
        <button className="next" onClick={() => setCurrentMonth(currentMonth.clone().add(1, 'month'))}><img src="./next.svg" alt="Next" /></button>

        <div className="day-of-week">P</div>
        <div className="day-of-week">W</div>
        <div className="day-of-week">S</div>
        <div className="day-of-week">C</div>
        <div className="day-of-week">P</div>
        <div className="day-of-week">S</div>
        <div className="day-of-week">N</div>
        {Array.from({length: firstDayOfMonth}, (_, i) => <div key={`empty-${i}`} />)}
      {daysInMonth.map(day => (
        <div key={day}>{day}</div>
      ))}
    </div>
  )
}

export default App