/** @format */

// import React, { useEffect } from 'react';

export default function Date() {
  const monthName = [
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
    'Dec',
  ];

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  let day = date.getDate();

  if (day < 10) {
    day = '0' + day;
  }

  const currentMonth = monthName[month];

  return (
    <div>
      <div>
        <h3>
          {currentMonth}, {day}, {year}
        </h3>
      </div>
    </div>
  );
}
