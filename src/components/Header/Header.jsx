/** @format */

// import Date from '../Date/Date';

import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

export default function Header() {

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
    <div className='header-container pt-3'>
      <div>
        <h1 className='header-title'><strong>EOD Calculator</strong></h1>
      </div>
      <div>
        {/* <Date /> */}
        <h3 className='date'>{currentMonth}, {day}, {year}</h3>
      </div>
    </div>
  );
}
