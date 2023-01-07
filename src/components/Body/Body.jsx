/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import './Body.css';

import Table from 'react-bootstrap/Table';

export default function Body() {
  return (
    <div className='body-container mt-5'>
      <Table className='table-container'>
        <tbody>
          <tr>
            <td>$0.05</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$0.05 Total</td>
          </tr>
          <tr>
            <td>$0.10</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$0.10 Total</td>
          </tr>
          <tr>
            <td>$0.25</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$0.25 Total</td>
          </tr>
          <tr>
            <td>$1.00</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$1.00 Total</td>
          </tr>
          <tr>
            <td>$2.00</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$2.00 Total</td>
          </tr>
          <tr>
            <td>$5.00</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$5.00 Total</td>
          </tr>
          <tr>
            <td>$10.00</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$10.00 Total</td>
          </tr>
          <tr>
            <td>$20.00</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$20.00 Total</td>
          </tr>
          <tr>
            <td>$50.00</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$50.00 Total</td>
          </tr>
          <tr>
            <td>$100.00</td>
            <td>X</td>
            <td>
              <input type='text'></input>
            </td>
            <td>=</td>
            <td>$100.00 Total</td>
          </tr>
          <tr />
          <tr>
            <td>
              <strong>Total Cash & Coin: </strong>
            </td>
            <td>=</td>
            <td>Total Cash</td>
          </tr>
          <tr>
            <td>Opening Cash: </td>
            <td>=</td>
            <td>$200.00</td>
          </tr>
          <tr>
            <td>
              <strong>Total Cash for Deposit: </strong>
            </td>
            <td>=</td>
            <td>Total Deposit Cash</td>
          </tr>
          <tr>
            <td>Total Cheques: </td>
            <td>=</td>
            <td>Total Cheque Amount</td>
          </tr>
          <tr>
            <td>
              <strong>Total Deposit: </strong>
            </td>
            <td>=</td>
            <td>Total Deposit Amount</td>
          </tr>
          <tr>
            <td>Total Invoices: </td>
            <td>=</td>
            <td>Total Invoices Amount</td>
          </tr>
          <tr>
            <td>
              <strong>Over or Short: </strong>
            </td>
            <td>=</td>
            <td>Over or Short Amount</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
