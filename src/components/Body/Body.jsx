/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import './Body.css';

import Table from 'react-bootstrap/Table';
import { useState } from 'react';

export default function Body() {
  const [nickel, setNickel] = useState(0);
  const [dime, setDime] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [dollar, setdollar] = useState(0);
  const [toonie, setToonie] = useState(0);
  const [five, setFive] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [cheques, setCheques] = useState(0);
  const [invoiceTotal, setInvoiceTotal] = useState(0);

  /**
   * Handles multiplication for two values.
   * - Takes in a and b and returns the result.
   */
  const multiplicationCalculator = (a, b) => {
    return a * b;
  };

  /**
   * Handles addition for two values.
   * - Takes in a and b and returns the result.
   */
  const additionCalculator = (a, b) => {
    return a + b;
  };

  /**
   * Handles subtraction for two values.
   * - Takes in a and b and returns the result.
   */
  const subtractionCalculator = (a, b) => {
    return a - b;
  };

  const OPENING_CASH_VALUE = 200;

  const changeValue = {
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
    dollar: 1.0,
    toonie: 2.0,
    five: 5.0,
    ten: 10.0,
    twenty: 20.0,
    fifty: 50.0,
    hundred: 100.0,
  };

  const parsed = (e) => {
    return parseFloat(e);
  };

  const nickelTotal = parsed(
    multiplicationCalculator(changeValue.nickel, nickel).toFixed(2)
  );
  const dimeTotal = parsed(
    multiplicationCalculator(changeValue.dime, dime).toFixed(2)
  );
  const quarterTotal = parsed(
    multiplicationCalculator(changeValue.quarter, quarter).toFixed(2)
  );
  const dollarTotal = parsed(
    multiplicationCalculator(changeValue.dollar, dollar).toFixed(2)
  );
  const toonieTotal = parsed(
    multiplicationCalculator(changeValue.toonie, toonie).toFixed(2)
  );
  const fiveTotal = parsed(
    multiplicationCalculator(changeValue.five, five).toFixed(2)
  );
  const tenTotal = parsed(
    multiplicationCalculator(changeValue.ten, ten).toFixed(2)
  );
  const twentyTotal = parsed(
    multiplicationCalculator(changeValue.twenty, twenty).toFixed(2)
  );
  const fiftyTotal = parsed(
    multiplicationCalculator(changeValue.fifty, fifty).toFixed(2)
  );
  const hundredTotal = parsed(
    multiplicationCalculator(changeValue.hundred, hundred).toFixed(2)
  );

  const totalCash =
    nickelTotal +
    dimeTotal +
    quarterTotal +
    dollarTotal +
    toonieTotal +
    fiveTotal +
    tenTotal +
    twentyTotal +
    fiftyTotal +
    hundredTotal;

  const totalCashForDeposit = parsed(
    subtractionCalculator(parsed(totalCash), OPENING_CASH_VALUE)
  );

  const totalDeposit = additionCalculator(totalCashForDeposit, parsed(cheques));

  const overOrShortTotal = parsed(totalDeposit) - parsed(invoiceTotal);

  return (
    <div className='body-container mt-3'>
      <Table className='table-container'>
        <tbody>
          <tr>
            <td>$0.05</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setNickel(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${nickelTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$0.10</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setDime(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${dimeTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$0.25</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setQuarter(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${quarterTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$1.00</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setdollar(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${dollarTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$2.00</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setToonie(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${toonieTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$5.00</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setFive(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${fiveTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$10.00</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setTen(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${tenTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$20.00</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setTwenty(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${twentyTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$50.00</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setFifty(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${fiftyTotal.toFixed(2)} Total</td>
          </tr>
          <tr>
            <td>$100.00</td>
            <td>X</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setHundred(e.target.value);
                }}
              />
            </td>
            <td>=</td>
            <td>${hundredTotal.toFixed(2)} Total</td>
          </tr>
          <tr />
          <tr>
            <td>
              <strong>Total Cash & Coin: </strong>
            </td>
            <td>=</td>
            <td>${totalCash.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Opening Cash: </td>
            <td>=</td>
            <td>${OPENING_CASH_VALUE.toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <strong>Total Cash for Deposit: </strong>
            </td>
            <td>=</td>
            <td>${totalCashForDeposit.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Cheques: </td>
            <td>$</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setCheques(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Total Deposit: </strong>
            </td>
            <td>=</td>
            <td>${totalDeposit.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Invoices: </td>
            <td>=</td>
            <td>
              <input
                type='text'
                onChange={(e) => {
                  setInvoiceTotal(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Over or Short: </strong>
            </td>
            <td>=</td>
            <td>${overOrShortTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
