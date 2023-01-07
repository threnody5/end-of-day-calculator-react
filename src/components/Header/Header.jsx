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
    <div className='header-container pt-5'>
      <div>
        <h1 className='header-title'>EOD Calculator</h1>
      </div>
      <div>
        {/* <Date /> */}
        {currentMonth}, {day}, {year}
      </div>
    </div>
  );
}
