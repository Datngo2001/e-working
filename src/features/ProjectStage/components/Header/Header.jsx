import React from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './header.module.css';

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

function Header() {
  const {
    stages,
    ganttChart: { dateRowAt, stageRowAt, startColumnAt, startDate, endDate }
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
        week.month = `${month} '${start.getFullYear()}`;
      } else if (!week.month.includes(month)) {
        week.month += ` - ${month} '${start.getFullYear()}`;
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
    <div className={styles['header']}>
      {weeks.map((week, i) => (
        <div key={i} className={styles['week']}>
          <div
            style={{
              gridRowStart: dateRowAt,
              gridRowEnd: stageRowAt + stages.length + 1,
              gridColumnStart: week.start,
              gridColumnEnd: week.end,
              textAlign: 'center',
              borderRight: '1px solid #f2f2f2',
              borderLeft: '1px solid #f2f2f2',
              paddingTop: '5px',
              position: 'sticky'
            }}>
            {week.month}
          </div>
          {week.dates.map((date, j) => (
            <div
              key={`${week.month}:${date}`}
              style={{
                gridRow: dateRowAt + 1,
                gridColumnStart: week.start + j,
                backgroundColor: '#f2f2f2',
                width: '90%',
                margin: 'auto',
                borderRadius: '5px',
                fontSize: '0.7rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'sticky'
              }}>
              <div>{date}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Header;
