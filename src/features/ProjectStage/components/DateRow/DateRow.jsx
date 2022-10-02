import React from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

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
function DateRow() {
  const {
    ganttChart: { dateRowAt, startColumnAt, startDate, endDate }
  } = useSelector((state) => state.stage);

  const weeks = useMemo(() => {
    const result = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    let week = {
      month: '',
      dates: [],
      start: null,
      end: null
    };
    let i = startColumnAt;

    while (start <= end) {
      week.dates.push(start.getDate());

      let month = monthNames[start.getMonth()];
      if (week.month == '') {
        week.month = month;
      } else if (!week.month.includes(month)) {
        week.month += '-' + month;
      }

      //on Monday
      if (start.getDay() == 1 || !week.start) {
        week.start = i;
      }

      //on Sunday
      if (start.getDay() == 0) {
        week.end = i + 1;
        result.push({ ...week });
        week = {
          month: '',
          dates: [],
          start: null,
          end: null
        };
      }

      start.setDate(start.getDate() + 1);
      i++;
    }
    return result;
  }, [startDate, endDate]);

  return (
    <>
      {weeks.map((week, i) => (
        <div
          key={i}
          style={{
            gridRow: dateRowAt,
            gridColumnStart: week.start,
            gridColumnEnd: week.end,
            textAlign: 'center',
            borderRight: '1px solid #f2f2f2',
            borderLeft: '1px solid #f2f2f2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <div>{week.month}</div>
        </div>
      ))}
      {weeks.map((week) =>
        week.dates.map((date, i) => (
          <div
            key={`${week.month}:${date}`}
            style={{
              gridRow: dateRowAt + 1,
              gridColumnStart: week.start + i,
              backgroundColor: '#f2f2f2',
              width: '90%',
              margin: 'auto',
              borderRadius: '5px',
              fontSize: '0.7rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <div>{date}</div>
          </div>
        ))
      )}
    </>
  );
}

export default DateRow;
