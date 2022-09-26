import React from 'react';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
function DateRow({ startDate, endDate }) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let months = new Set();
  let monthStartColumns = new Set([1]);
  const dates = [];

  let i = 1;
  while (start < end) {
    months.add(monthNames[start.getMonth()]);
    dates.push(start.getDate());
    if (start.getDate() === 1) {
      monthStartColumns.add(i);
    }
    start.setDate(start.getDate() + 1);
    i++;
  }

  months = Array.from(months);
  monthStartColumns = Array.from(monthStartColumns);

  return (
    <>
      {months.map((month, index) => (
        <div
          key={month}
          style={{
            gridRow: 1,
            gridColumnStart: monthStartColumns[index],
            gridColumnEnd: monthStartColumns[index + 1] - 1
          }}>
          {month}
        </div>
      ))}
      {dates.map((date) => (
        <div
          key={date}
          style={{
            gridRow: 2
          }}>
          {date}
        </div>
      ))}
    </>
  );
}

export default React.memo(DateRow);
