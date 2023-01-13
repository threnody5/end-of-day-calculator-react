/** @format */

import Date from '../Date/Date';

import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

export default function Header() {
  return (
    <div className='header-container pt-3'>
      <div>
        <h1 className='header-title'>
          <strong>EOD Calculator</strong>
        </h1>
      </div>
      <div>
        <Date />
      </div>
    </div>
  );
}
